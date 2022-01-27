package com.ssafy.persona.content.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentReportRequest;
import com.ssafy.persona.content.model.dto.ReplyReportRequest;

@Mapper
public interface ReportMapper {

	int contentReport(ContentReportRequest contentReportRequest);
	void contentReportUpdate(int contentSeq);
	void characterReportUpdate(int contentSeq);
	
	int replyReport(ReplyReportRequest replyReportRequest);
	void replyReportUpdate(int reportedReply);
	void characterReplyReportUpdate(int reportedReply);
	
}
