package com.ssafy.persona.domain.content.model.dto;

import com.ssafy.persona.domain.content.model.entity.ContentReport;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentReportRequest {
	private int reportingCharacter;
	private int reportedContent;
	private int reportType;
	private String reportText;
	
	public ContentReport toContentReport() {
		return ContentReport.builder()
							.reportingCharacter(reportingCharacter)
							.reportedContent(reportedContent)
							.reportType(reportType)
							.reportText(reportText)
							.build();
	}
}
