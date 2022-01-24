package com.ssafy.persona.user.service;

import org.springframework.stereotype.Service;

import com.ssafy.persona.user.model.dto.UserGetResponse;
import com.ssafy.persona.user.model.dto.UserSignupRequest;
import com.ssafy.persona.user.model.entity.User;

@Service
public interface UserService {
	UserGetResponse getUser(int userSeq);
	boolean userValid(String userId);
	int userSignup(User user);
}
