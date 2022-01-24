package com.ssafy.persona.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.user.model.dto.UserGetResponse;
import com.ssafy.persona.user.service.UserService;

@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RestController
public class UserController {
	@Autowired
	UserService userService;
	
	@GetMapping("/user")
	public ResponseEntity<UserGetResponse> getUser(int user_seq) {
		
		UserGetResponse user = userService.getUser(user_seq);
		
		if (user != null) {
			return (new ResponseEntity<UserGetResponse>(user,HttpStatus.OK));
		}
		else {
			return (new ResponseEntity<UserGetResponse>(user,HttpStatus.ACCEPTED));
		}
	}
}
