package com.ssafy.persona.user.controller;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.user.model.dto.MailVerifyRequest;
import com.ssafy.persona.user.model.dto.UpdateAuthRequest;
import com.ssafy.persona.user.model.dto.UserGetResponse;
import com.ssafy.persona.user.model.dto.UserLoginRequest;
import com.ssafy.persona.user.model.dto.UserSignupRequest;
import com.ssafy.persona.user.model.dto.UserUpdateRequest;
import com.ssafy.persona.user.model.entity.Mail;
import com.ssafy.persona.user.model.entity.User;
import com.ssafy.persona.user.security.SecurityService;
import com.ssafy.persona.user.service.MailService;
import com.ssafy.persona.user.service.UserService;

@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	
	@Autowired
	MailService mailService;
	
	@Autowired
	SecurityService securityservice;
	
	@Autowired
	private SecurityService securityService;
	
	@PostMapping("/login")
	public ResponseEntity<Map<String,String>> createToken(@RequestBody UserLoginRequest request) throws NoSuchAlgorithmException{

		Map<String, String>map = new HashMap<>();
		
		request.setUserPw(securityservice.encrypt(request.getUserPw()));
		
		// 로그인 매칭 정보 없음
		if(userService.userLogin(request.toUser()) < 1) {
			map.put("token", "");
			return (new ResponseEntity<Map<String,String>>(map,HttpStatus.ACCEPTED));
		}
		
		// 만료기간 1분
		String token = securityService.createToken(request.getUserId(), (1*1000*60));

		map.put("token", token);
		System.out.println(token);
		return (new ResponseEntity<Map<String,String>>(map, HttpStatus.OK));
	}
	
	@PostMapping
	public ResponseEntity signupUser(@RequestBody UserSignupRequest user) throws NoSuchAlgorithmException {
		
		user.setUserPw(securityservice.encrypt(user.getUserPw()));
		
		if(userService.userSignup(user.toUser()) > 0) {
			
			Mail mail = new Mail();
			mail.setUserSeq(userService.getUserSeq(user.getUserId()));
			mail.setMailText("위 인증완료를 누르면 인증이 진행됩니다");
			
			mailService.sendMail(mail, user.getUserId());
			return (new ResponseEntity<HttpStatus>(HttpStatus.OK));
		}
			
		return (new ResponseEntity<HttpStatus>(HttpStatus.ACCEPTED));
	}
	
	@GetMapping("/{userSeq}")
	public ResponseEntity<UserGetResponse> getUser(@PathVariable int userSeq) {
		
		UserGetResponse user = userService.getUser(userSeq);
		if (user != null) {
			return (new ResponseEntity<UserGetResponse>(user,HttpStatus.OK));
		}
		else {
			return (new ResponseEntity<UserGetResponse>(user,HttpStatus.ACCEPTED));
		}
	}
	
	@GetMapping("/email")
	public ResponseEntity updateUser(@RequestParam String userId) {

		Mail mail = new Mail();

		mail.setUserSeq(userService.getUserSeq(userId));
		mail.setMailText("위 인증완료를 누르면 인증이 진행됩니다");
		mailService.sendMail(mail, userId);

		return (new ResponseEntity(HttpStatus.OK));
	}
	
	@PutMapping("/email")
	public ResponseEntity updateAuth(@RequestBody UpdateAuthRequest request) {
		
		String tmpPw = mailService.makePw();
		
		// 비밀번호 변경
		if(userService.changePw(request.toUser(tmpPw)) < 1) {
			return (new ResponseEntity(HttpStatus.ACCEPTED));
		}
		
		Mail mail = new Mail();

		mail.setUserSeq(userService.getUserSeq(request.getUserId()));
		mail.setMailText("임시 비밀번호로 접속하세요!");
		mailService.sendPw(mail, userService.getUserEmail(request.getUserId()), tmpPw);
		
		return (new ResponseEntity(HttpStatus.OK));
	}
	
	@GetMapping("/email/{userEmail}")
	public ResponseEntity<Map<String,String>> emailGet(@PathVariable String userEmail){
		Map<String, String>map = new HashMap<>();
		
		if (userService.checkEmail(userEmail) < 1) {
			map.put("userId", "");
			return (new ResponseEntity<Map<String,String>>(map,HttpStatus.ACCEPTED));
		}
		map.put("userId", userService.getUserId(userEmail));
		return (new ResponseEntity<Map<String,String>>(map,HttpStatus.OK));
	}
	
	@GetMapping("/email/id")
	public ResponseEntity findId(@RequestParam String userEmail) {
		Mail mail = new Mail();

		mail.setUserEmail(userEmail);
		mail.setMailText("가입하신 아이디는 위와 같습니다.");
		mailService.findId(mail, userEmail);

		return (new ResponseEntity(HttpStatus.OK));
	}
	
	// 이메일에서 인증 눌렀을 때 반응
	@GetMapping("/email/verify")
	public ResponseEntity verifyEmail(MailVerifyRequest mailRequest){
		
		if(mailService.verifyEmail(mailRequest) > 0) {
			// 허가 받았다고 user 업데이트 해야함
			userService.emailIsValid(mailRequest.getUserId());
			System.out.println("성공");
			return (new ResponseEntity(HttpStatus.OK));
		}
		else
			System.out.println("실패");
		return (new ResponseEntity(HttpStatus.BAD_REQUEST));
	}
	
	@GetMapping("/email/valid/{userEmail}")
	public ResponseEntity<Map<String,Character>> emailValid(@PathVariable String userEmail){
		Map<String, Character>map = new HashMap<>();
		
		if(userService.checkEmail(userEmail) > 0) {
			map.put("valid", '0');
			return (new ResponseEntity<Map<String,Character>>(map,HttpStatus.ACCEPTED));
		}
		map.put("valid", '1');
		return (new ResponseEntity<Map<String,Character>>(map,HttpStatus.OK));
	}

	@GetMapping("/valid/{userId}")
	public ResponseEntity<Map<String,Character>> userValid(@PathVariable String userId){
		Map<String, Character>map = new HashMap<>();
		if(userService.userValid(userId)) {
			map.put("valid", '2');
			return (new ResponseEntity<Map<String,Character>>(map,HttpStatus.ACCEPTED));
		}
		map.put("valid", '1');
		return (new ResponseEntity<Map<String,Character>>(map,HttpStatus.OK));
	}

	
	@PutMapping("/setting/account")
	public ResponseEntity updateUser(@RequestBody UserUpdateRequest user) throws NoSuchAlgorithmException {
		//user.setUserPw(securityservice.encrypt(user.getUserPw()));
		User tmpu = user.toUser();
		if(tmpu.getUserBirth() == null && tmpu.getUserPw() == null) {
			return (new ResponseEntity(HttpStatus.BAD_REQUEST));
		}
		// pw 변경
		else if(tmpu.getUserBirth() == null) {
			tmpu.setUserPw(securityservice.encrypt(user.getUserPw()));
			if(userService.changePw(tmpu) > 0)
				return (new ResponseEntity(HttpStatus.OK));
			return (new ResponseEntity(HttpStatus.ACCEPTED));
		}
		// birth 변경
		else if(tmpu.getUserPw() == null) {
			if(userService.changeBirth(tmpu) > 0)
				return (new ResponseEntity(HttpStatus.OK));
			return (new ResponseEntity(HttpStatus.ACCEPTED));
		}
		
		return (new ResponseEntity(HttpStatus.BAD_REQUEST));
	}
	
	@PostMapping("/setting/verification")
	public ResponseEntity checkPw(@RequestBody UserLoginRequest user) throws NoSuchAlgorithmException {
		user.setUserPw(securityservice.encrypt(user.getUserPw()));
		if(userService.checkPw(user.toUser()) > 0)
			return (new ResponseEntity(HttpStatus.OK));
		return (new ResponseEntity(HttpStatus.ACCEPTED));
	}
	
	// DateTimeFormat에 맞지않는 파라미터가 들어왔을때 처리
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity dataex(Exception e) {
		System.out.println("this is dataFormat Err");
		return (new ResponseEntity(HttpStatus.BAD_REQUEST));
	}


}
