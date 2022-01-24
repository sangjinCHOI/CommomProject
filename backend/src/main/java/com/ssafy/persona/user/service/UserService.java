package com.ssafy.persona.user.service;

import org.springframework.stereotype.Service;

import com.ssafy.persona.user.model.dto.UserGetResponse;

@Service
public interface UserService {
	UserGetResponse getUser(int userSeq);
	boolean userValid(String userId);
}
