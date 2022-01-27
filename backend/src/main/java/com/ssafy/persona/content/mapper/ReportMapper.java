package com.ssafy.persona.content.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentReportRequest;

@Mapper
public interface ReportMapper {

	int contentReport(ContentReportRequest contentReportRequest);

	void contentReportUpdate(int contentSeq);
	
	void characterReportUpdate(int contentSeq);
	
}
