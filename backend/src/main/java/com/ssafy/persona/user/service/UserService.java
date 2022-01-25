package com.ssafy.persona.user.service;

import org.springframework.stereotype.Service;

import com.ssafy.persona.user.model.dto.UserGetResponse;
import com.ssafy.persona.user.model.entity.User;

@Service
public interface UserService {
	UserGetResponse getUser(int userSeq);
	boolean userValid(String userId);
	int userSignup(User user);
	int checkPw(User user);
	int checkEmail(String userEmail);
	int changePw(User user);
	int changeBirth(User user);
	String getUserId(String userEmail);
	int userActive(String userEmail);
	int userLogin(User user);
}
