package com.ssafy.persona.domain.user.service;

import com.ssafy.persona.domain.user.model.dto.UserGetResponse;
import com.ssafy.persona.domain.user.model.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
	UserGetResponse getUser(String userId);
	boolean userValid(String userId);
	int userSignup(User user);
	int checkPw(User user);
	int checkEmail(String userEmail);
	int changePw(User user);
	int changeBirth(User user);
	String getUserId(String userEmail);
	String getUserEmail(String userId);
	int userActive(String userEmail);
	int userLogin(User user);
	int getUserSeq(String userId);
	int emailIsValid(String userId);
	int isValid(String userId);
}
