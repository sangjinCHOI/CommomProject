package com.ssafy.persona.content.model.dto;

import com.ssafy.persona.character.model.Entity.Report;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentReportRequest {
	private int reportingCharacter;
	private int reportedCharacter;
	private int reportType;
	private String reportContentType;
	private int reportSeq;
	
	public Report toReport() {
		return Report.builder()
					 .reportingCharacter(reportingCharacter)
					 .reportedCharacter(reportedCharacter)
					 .reportType(reportType)
					 .reportContentType(reportContentType)
					 .reportSeq(reportSeq)
					 .build();
	}
}
