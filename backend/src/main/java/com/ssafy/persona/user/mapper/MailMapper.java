package com.ssafy.persona.user.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MailMapper {
	String getEmail(int userSeq);
}
