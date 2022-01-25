package com.ssafy.persona.content.service;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;

public interface ContentService {
	boolean contentCreate(ContentCreateRequest contentCreateRequest);
	boolean contentModify(ContentModifyRequest contentModifyRequest);
	boolean contentDelete(int contentSeq);
	
	boolean replyCreate(ReplyCreateRequest replyCreateRequest);
	boolean replyModify(ReplyModifyRequest replyModifyRequest);
}
