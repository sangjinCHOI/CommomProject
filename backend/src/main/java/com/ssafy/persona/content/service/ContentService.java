package com.ssafy.persona.content.service;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;

public interface ContentService {
	public boolean contentCreate(ContentCreateRequest contentCreateRequest);
	public boolean contentModify(ContentModifyRequest contentModifyRequest);
	
}
