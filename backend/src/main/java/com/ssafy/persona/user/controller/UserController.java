package com.ssafy.persona.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.user.model.dto.UserGetResponse;
import com.ssafy.persona.user.service.UserService;

@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	
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
	
	@GetMapping("/valid")
	public ResponseEntity<Character> userValid(String userId){
		if(userService.userValid(userId)) return (new ResponseEntity<Character>('2',HttpStatus.OK));
		return (new ResponseEntity<Character>('1',HttpStatus.ACCEPTED));
	}
}
