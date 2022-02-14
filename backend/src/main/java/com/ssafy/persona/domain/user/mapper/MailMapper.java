package com.ssafy.persona.domain.user.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.domain.user.model.dto.MailVerifyRequest;

@Mapper
public interface MailMapper {
	String getEmail(int userSeq);
	String getIdtoEmail(String userEmail);
	int addAuthNumber(String userId, String authText);
	int verifyEmail(MailVerifyRequest mailRequest);
	int countAuth(String userId);
	int updateAuthNumber(String userId, String authText);
}
