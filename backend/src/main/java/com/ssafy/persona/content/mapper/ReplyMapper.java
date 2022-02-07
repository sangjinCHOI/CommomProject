package com.ssafy.persona.content.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyGetResponse;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;

@Mapper
public interface ReplyMapper {
	int replyCreate(ReplyCreateRequest replyCreateRequest);
	int replyModify(ReplyModifyRequest replyModifyRequest);
	int replyDelete(int replySeq);
	List<ReplyGetResponse> replyList(int characterNow, int contentSeq);
}
