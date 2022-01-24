package com.ssafy.persona.user.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.user.model.dto.UserGetResponse;

@Mapper
public interface UserMapper {
	int seqIsValid(int userSeq);
	UserGetResponse getUser(int userSeq);
	int userValid(String userId);
}
