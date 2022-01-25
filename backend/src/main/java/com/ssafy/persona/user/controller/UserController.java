package com.ssafy.persona.user.controller;

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

import com.ssafy.persona.user.model.dto.UserGetResponse;
import com.ssafy.persona.user.model.dto.UserLoginRequest;
import com.ssafy.persona.user.model.dto.UserSignupRequest;
import com.ssafy.persona.user.model.dto.UserUpdateRequest;
import com.ssafy.persona.user.model.entity.User;
import com.ssafy.persona.user.security.SecurityService;
import com.ssafy.persona.user.service.UserService;

@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	
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
	
		if(userService.userSignup(user.toUser()) > 0)
			return (new ResponseEntity(HttpStatus.OK));
		return (new ResponseEntity(HttpStatus.ACCEPTED));
	}
	

	@GetMapping("/login")
	public ResponseEntity<String> createToken(UserLoginRequest request){
		
		// 로그인 매칭 정보 없음
		if(userService.userLogin(request.toUser()) < 1) {
			return (new ResponseEntity<String>("",HttpStatus.ACCEPTED));
		}
		
		// 만료기간 1분
		String token = securityService.createToken(request.getUserId(), (1*1000*60));
		
		return (new ResponseEntity<String>(token, HttpStatus.OK));
	}

	@GetMapping("/valid")
	public ResponseEntity<Character> userValid(String userId){
		if(userService.userValid(userId)) return (new ResponseEntity<Character>('2',HttpStatus.OK));
		return (new ResponseEntity<Character>('1',HttpStatus.ACCEPTED));
	}
	
	@GetMapping("/email")
	public ResponseEntity<String> emailGet(String userEmail){
		
		if (userService.checkEmail(userEmail) < 1)
			return (new ResponseEntity<String>("",HttpStatus.ACCEPTED));
		return (new ResponseEntity<String>(userService.getUserId(userEmail),HttpStatus.OK));
	}
	
	@GetMapping("/email/valid")
	public ResponseEntity<Character> emailValid(String userEmail){
		if(userService.checkEmail(userEmail) > 0)
			return (new ResponseEntity<Character>('0',HttpStatus.OK));
		return (new ResponseEntity<Character>('1',HttpStatus.ACCEPTED));
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
		return (new ResponseEntity(HttpStatus.BAD_REQUEST));
	}
	
	

}
