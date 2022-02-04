package com.ssafy.persona.content.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.content.mapper.ContentMapper;
import com.ssafy.persona.content.mapper.LikeMapper;
import com.ssafy.persona.content.mapper.ReplyMapper;
import com.ssafy.persona.content.mapper.ReportMapper;
import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.ContentLikeRequest;
import com.ssafy.persona.content.model.dto.LikeListResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ContentPersonListRequest;
import com.ssafy.persona.content.model.dto.ContentReportRequest;
import com.ssafy.persona.content.model.dto.ContentTagListRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyGetResponse;
import com.ssafy.persona.content.model.dto.ReplyLikeRequest;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;
import com.ssafy.persona.content.model.dto.ReplyReportRequest;

@Service
public class ContentServiceImpl implements ContentService {
	@Autowired
	ContentMapper contentMapper;
	@Autowired
	ReplyMapper replyMapper;
	@Autowired
	LikeMapper likeMapper;
	@Autowired
	ReportMapper reportMapper;

	
	@Override
	public boolean contentCreate(ContentCreateRequest contentCreateRequest) {
		return contentMapper.contentCreate(contentCreateRequest) == 1;
	}

	@Override
	public boolean contentModify(ContentModifyRequest contentModifyRequest) {
		return contentMapper.contentModify(contentModifyRequest) == 1;
	}

	@Override
	public boolean contentDelete(int contentSeq) {
		return contentMapper.contentDelete(contentSeq) == 1;
	}

	@Override
	public boolean replyCreate(ReplyCreateRequest replyCreateRequest) {
		return replyMapper.replyCreate(replyCreateRequest) == 1;

	}

	@Override
	public boolean replyModify(ReplyModifyRequest replyModifyRequest) {
		return replyMapper.replyModify(replyModifyRequest) == 1;
	}

	@Override
	public boolean replyDelete(int replySeq) {
		return replyMapper.replyDelete(replySeq) == 1;
	}

	@Override
	public List<ReplyGetResponse> replyList(ContentGetRequest contentGetRequest) {
		return replyMapper.replyList(contentGetRequest);
	}

	@Override
	public List<ContentGetResponse> contentPersonalList(ContentPersonListRequest contentPersonListRequest) {
		return contentMapper.contentPersonalList(contentPersonListRequest);
	}

	@Override
	public List<ContentGetResponse> contentTagList(ContentTagListRequest contentTagListRequest) {
		return contentMapper.contentTagList(contentTagListRequest);
	}

	@Override
	public List<LikeListResponse> contentLikeList(int contentSeq) {
		return likeMapper.contentLikeList(contentSeq);
	}

	@Override
	public List<LikeListResponse> replyLikeList(int replySeq) {
		return likeMapper.replyLikeList(replySeq);
	}

	@Override
	public boolean contentReport(ContentReportRequest contentReportRequest) {
		return reportMapper.contentReport(contentReportRequest) == 1;
	}
	
	@Override
	public void contentReportUpdate(int reportedContent) {
		reportMapper.contentReportUpdate(reportedContent);
		
	}

	@Override
	public void characterReportUpdate(int reportedContent) {
		reportMapper.characterReportUpdate(reportedContent);
	}

	@Override
	public boolean replyReport(ReplyReportRequest replyReportRequest) {
		return reportMapper.replyReport(replyReportRequest) == 1;
	}

	@Override
	public void replyReportUpdate(int reportedReply) {
		reportMapper.replyReportUpdate(reportedReply);
		
	}

	@Override
	public void characterReplyReportUpdate(int reportedReply) {
		reportMapper.characterReplyReportUpdate(reportedReply);
		
	}
	
	@Override
	public boolean contentLike(ContentLikeRequest contentLikeRequest) {
		return likeMapper.contentLike(contentLikeRequest) == 1;
	}

	@Override
	public void contentLikeUpdate(int contentSeq) {
		likeMapper.contentLikeUpdate(contentSeq);
		
	}

	@Override
	public boolean contentDislike(ContentLikeRequest contentLikeRequest) {
		return likeMapper.contentDislike(contentLikeRequest) == 1;
	}

	@Override
	public void contentDislikeUpdate(int contentSeq) {
		likeMapper.contentDislikeUpdate(contentSeq);
		
	}

	@Override
	public boolean replyLike(ReplyLikeRequest replyLikeRequest) {
		return likeMapper.replyLike(replyLikeRequest) == 1;
	}

	@Override
	public void replyLikeUpdate(int replySeq) {
		likeMapper.replyLikeUpdate(replySeq);
	}

	@Override
	public boolean replyDislike(ReplyLikeRequest replyLikeRequest) {
		return likeMapper.replyDislike(replyLikeRequest) == 1;
	}

	@Override
	public void replyDislikeUpdate(int replySeq) {
		likeMapper.replyDislikeUpdate(replySeq);
		
	}

	@Override
	public ContentGetResponse contentGet(ContentGetRequest contentGetRequest) {
		return contentMapper.contentGet(contentGetRequest);
	}

	@Override
	public List<ContentGetResponse> contentList(int characterNow) {
		return contentMapper.contentList(characterNow);
	}

	@Override
	public boolean hashtagCreate(List<String> hashtag, int contentSeq) {
		return contentMapper.hashtagCreate(hashtag, contentSeq) == 1;
	}

	@Override
	public boolean hashtagModify(List<String> hashtag, int contentSeq) {
		return contentMapper.hashtagModify(hashtag, contentSeq) == 1;
	}
	
}