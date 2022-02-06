package com.ssafy.persona.user.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.user.model.dto.UpdateCountRequest;
import com.ssafy.persona.user.model.dto.UserGetResponse;
import com.ssafy.persona.user.model.entity.User;

@Mapper
public interface UserMapper {
	int seqIsValid(String userId);
	UserGetResponse getUser(String userId);
	int userValid(String userId);
	int userSignup(User user);
	int checkPw(User user);
	int checkEmail(String userEmail);
	int changePw(User user);
	int changeBirth(User user);
	String getUserId(String userEmail);
	int userActive(String userEmail);
	int userLogin(User user);
	Integer getUserSeq(String userId);
	int emailIsValid(String userId);
	String getUserEmail(String userId);
	int getCreatableCount(int userSeq);
	int updateCreatableCount(UpdateCountRequest request);
}
