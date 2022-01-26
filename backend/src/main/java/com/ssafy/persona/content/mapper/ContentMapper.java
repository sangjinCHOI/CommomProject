package com.ssafy.persona.content.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ContentReportRequest;

@Mapper
public interface ContentMapper {
	int contentCreate(ContentCreateRequest createContentRequest);
	int contentModify(ContentModifyRequest contentModifyRequest);
	int contentDelete(int contentSeq);
	int contentReport(ContentReportRequest contentReportRequest);
	ContentGetResponse contentGet(int contentSeq);
}
