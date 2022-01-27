package com.ssafy.persona.content.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.content.mapper.ContentMapper;
import com.ssafy.persona.content.mapper.LikeMapper;
import com.ssafy.persona.content.mapper.ReplyMapper;
import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.LikeListResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ContentReportRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyGetResponse;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;

@Service
public class ContentServiceImpl implements ContentService {
	@Autowired
	ContentMapper contentMapper;
	@Autowired
	ReplyMapper replyMapper;
	@Autowired
	LikeMapper likeMapper;
	
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
	public boolean contentReport(ContentReportRequest contentReportRequest) {
		return contentMapper.contentReport(contentReportRequest) == 1;
	}

	@Override
	public List<ReplyGetResponse> replyList(int contentSeq) {
		return replyMapper.replyList(contentSeq);
	}

	@Override
	public ContentGetResponse contentGet(int contentSeq) {
		return contentMapper.contentGet(contentSeq);
	}

	@Override
	public List<ContentGetResponse> contentPersonalList(int characterSeq) {
		return contentMapper.contentPersonalList(characterSeq);
	}

	@Override
	public List<ContentGetResponse> contentTagList(String tagText) {
		return contentMapper.contentTagList(tagText);
	}

	@Override
	public List<LikeListResponse> contentLikeList(int contentSeq) {
		return likeMapper.contentLikeList(contentSeq);
	}

	@Override
	public List<LikeListResponse> replyLikeList(int replySeq) {
		return likeMapper.replyLikeList(replySeq);
	}
	
}
