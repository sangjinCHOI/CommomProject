package com.ssafy.persona.content.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;

@Mapper
public interface ReplyMapper {
	int replyCreate(ReplyCreateRequest replyCreateRequest);
	int replyModify(ReplyModifyRequest replyModifyRequest);
}
