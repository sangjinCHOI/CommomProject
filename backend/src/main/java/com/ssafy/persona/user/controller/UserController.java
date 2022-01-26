package com.ssafy.persona.user.controller;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.user.model.dto.MailVerifyRequest;
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
	private SecurityService securityService;
	
	@GetMapping
	public ResponseEntity<UserGetResponse> getUser(int userSeq) {
		
		UserGetResponse user = userService.getUser(userSeq);
		if (user != null) {
			return (new ResponseEntity<UserGetResponse>(user,HttpStatus.OK));
		}
		else {
			return (new ResponseEntity<UserGetResponse>(user,HttpStatus.ACCEPTED));
		}
	}
	
	@PostMapping
	public ResponseEntity signupUser(UserSignupRequest user) {
		if(userService.userSignup(user.toUser()) > 0) {
			
			Mail mail = new Mail();
			mail.setUserSeq(userService.getUserSeq(user.getUserId()));
			mail.setMailText("위 인증완료를 누르면 인증이 진행됩니다");
			
			mailService.sendMail(mail, user.getUserId());
			return (new ResponseEntity(HttpStatus.OK));
		}
			
		return (new ResponseEntity(HttpStatus.ACCEPTED));
	}
	
	@PostMapping("/email")
	public ResponseEntity updateUser(String userId) {

		Mail mail = new Mail();

		mail.setUserSeq(userService.getUserSeq(userId));
		mail.setMailText("위 인증완료를 누르면 인증이 진행됩니다");
		mailService.sendMail(mail, userId);

		return (new ResponseEntity(HttpStatus.OK));
	}
	
	@PostMapping("/email/id")
	public ResponseEntity findId(String userEmail) {
		Mail mail = new Mail();

		mail.setUserEmail(userEmail);
		//mail.setUserSeq(userService.getUserSeq(userId));
		mail.setMailText("가입하신 아이디는 위와 같습니다.");
		mailService.findId(mail, userEmail);

		return (new ResponseEntity(HttpStatus.OK));
	}
	
	// 이메일에서 인증 눌렀을 때 반응
	@GetMapping("/mail/verify")
	public void verifyEmail(MailVerifyRequest mailRequest){
		
		if(mailService.verifyEmail(mailRequest) > 0) {
			// 허가 받았다고 user 업데이트 해야함
			userService.emailIsValid(mailRequest.getUserId());
			System.out.println("성공");
			
		}
		else
			System.out.println("실패");
		//return null;
	}

	@GetMapping("/login")
	public ResponseEntity<Map<String,String>> createToken(UserLoginRequest request){

		Map<String, String>map = new HashMap<>();
		// 로그인 매칭 정보 없음
		if(userService.userLogin(request.toUser()) < 1) {
			map.put("token", "");
			return (new ResponseEntity<Map<String,String>>(map,HttpStatus.ACCEPTED));
		}
		
		// 만료기간 1분
		String token = securityService.createToken(request.getUserId(), (1*1000*60));

		map.put("token", token);
		return (new ResponseEntity<Map<String,String>>(map, HttpStatus.OK));
	}

	@GetMapping("/valid")
	public ResponseEntity<Map<String,Character>> userValid(String userId){
		Map<String, Character>map = new HashMap<>();
		if(userService.userValid(userId)) {
			map.put("valid", '2');
			return (new ResponseEntity<Map<String,Character>>(map,HttpStatus.OK));
		}
		map.put("valid", '1');
		return (new ResponseEntity<Map<String,Character>>(map,HttpStatus.ACCEPTED));
	}
	
	@GetMapping("/email")
	public ResponseEntity<Map<String,String>> emailGet(String userEmail){
		Map<String, String>map = new HashMap<>();
		
		if (userService.checkEmail(userEmail) < 1) {
			map.put("userId", "");
			return (new ResponseEntity<Map<String,String>>(map,HttpStatus.ACCEPTED));
		}
		map.put("userId", userService.getUserId(userEmail));
		return (new ResponseEntity<Map<String,String>>(map,HttpStatus.OK));
	}
	
	@GetMapping("/email/valid")
	public ResponseEntity<Map<String,Character>> emailValid(String userEmail){
		Map<String, Character>map = new HashMap<>();
		
		if(userService.checkEmail(userEmail) > 0) {
			map.put("valid", '0');
			return (new ResponseEntity<Map<String,Character>>(map,HttpStatus.OK));
		}
		map.put("valid", '1');
		return (new ResponseEntity<Map<String,Character>>(map,HttpStatus.ACCEPTED));
	}
	
	@PutMapping("/setting/account")
	public ResponseEntity updateUser(UserUpdateRequest user) {
		User tmpu = user.toUser();
		if(tmpu.getUserBirth() == null && tmpu.getUserPw() == null) {
			return (new ResponseEntity(HttpStatus.BAD_REQUEST));
		}
		// pw 변경
		else if(tmpu.getUserBirth() == null) {
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
	
	@GetMapping("/setting/verification")
	public ResponseEntity checkPw(UserLoginRequest user) {
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
