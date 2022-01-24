package com.ssafy.persona.user.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.user.model.dto.UserGetResponse;
import com.ssafy.persona.user.model.entity.User;

@Mapper
public interface UserMapper {
	int seqIsValid(int userSeq);
	UserGetResponse getUser(int userSeq);
	int userValid(String userId);
	int userSignup(User user);
	int checkPw(User user);
	int checkEmail(String userEmail);
	int changePw(User user);
	int changeBirth(User user);
	String getUserId(String userEmail);
	int userActive(String userEmail);
}
