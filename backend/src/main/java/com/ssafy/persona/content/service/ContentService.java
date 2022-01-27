package com.ssafy.persona.content.service;

import java.util.List;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.LikeListResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ContentReportRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyGetResponse;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;

public interface ContentService {
	boolean contentCreate(ContentCreateRequest contentCreateRequest);
	boolean contentModify(ContentModifyRequest contentModifyRequest);
	boolean contentDelete(int contentSeq);
	ContentGetResponse contentGet(int contentSeq);
	
	boolean replyCreate(ReplyCreateRequest replyCreateRequest);
	boolean replyModify(ReplyModifyRequest replyModifyRequest);
	boolean replyDelete(int replySeq);
	List<ReplyGetResponse> replyList(int contentSeq);
	
	boolean contentReport(ContentReportRequest contentReportRequest);
	void contentReportUpdate(int reportedContent);
	void characterReportUpdate(int reportedContent);
	
	List<ContentGetResponse> contentPersonalList(int characterSeq);
	List<ContentGetResponse> contentTagList(String tagText);
	
	List<LikeListResponse> contentLikeList(int contentSeq);
	List<LikeListResponse> replyLikeList(int replySeq);
}