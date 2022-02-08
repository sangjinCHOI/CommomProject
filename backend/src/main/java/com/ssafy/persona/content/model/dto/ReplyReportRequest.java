package com.ssafy.persona.content.model.dto;

import com.ssafy.persona.content.model.entity.ReplyReport;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ReplyReportRequest {
	private int reportingCharacter;
	private int reportedReply;
	private int reportType;
	private String reportText;
	
	public ReplyReport toReplyReport() {
		return ReplyReport.builder()
						  .reportingCharacter(reportingCharacter)
						  .reportedReply(reportedReply)
						  .reportType(reportType)
						  .reportText(reportText)
						  .build();
	}
}
