package com.ssafy.persona.content.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.content.mapper.ContentMapper;
import com.ssafy.persona.content.mapper.ReplyMapper;
import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;

@Service
public class ContentServiceImpl implements ContentService {
	@Autowired
	ContentMapper contentMapper;
	@Autowired
	ReplyMapper replyMapper;
	
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
	
}
