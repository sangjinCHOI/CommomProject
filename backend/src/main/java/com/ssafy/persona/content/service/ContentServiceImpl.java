package com.ssafy.persona.content.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.content.mapper.ContentMapper;
import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;

@Service
public class ContentServiceImpl implements ContentService {
	@Autowired
	ContentMapper contentMapper;
	
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
		// TODO Auto-generated method stub
		return contentMapper.contentDelete(contentSeq) == 1;
	}
	
}
