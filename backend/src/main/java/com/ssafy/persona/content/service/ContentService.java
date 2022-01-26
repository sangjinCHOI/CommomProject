package com.ssafy.persona.content.service;

import java.util.List;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentDetailResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ContentReportRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyGetResponse;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;

public interface ContentService {
	boolean contentCreate(ContentCreateRequest contentCreateRequest);
	boolean contentModify(ContentModifyRequest contentModifyRequest);
	boolean contentDelete(int contentSeq);
	ContentDetailResponse contentGet(int contentSeq);
	
	boolean replyCreate(ReplyCreateRequest replyCreateRequest);
	boolean replyModify(ReplyModifyRequest replyModifyRequest);
	boolean replyDelete(int replySeq);
	List<ReplyGetResponse> replyList(int contentSeq);
	
	boolean contentReport(ContentReportRequest contentReportRequest);
}
