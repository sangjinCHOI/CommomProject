package com.ssafy.persona.domain.content.mapper;

import java.util.List;

import com.ssafy.persona.domain.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.domain.content.model.dto.ReplyGetResponse;
import com.ssafy.persona.domain.content.model.dto.ReplyModifyRequest;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReplyMapper {
	int replyCreate(ReplyCreateRequest replyCreateRequest);
	int replyModify(ReplyModifyRequest replyModifyRequest);
	int replyDelete(int replySeq);
	List<ReplyGetResponse> replyList(int characterNow, int contentSeq);
}
