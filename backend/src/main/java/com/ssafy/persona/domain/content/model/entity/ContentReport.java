package com.ssafy.persona.domain.content.model.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class ContentReport {
	@Id
	private int reportContentSeq;
	@Column
	private int reportingCharacter;
	@Column
	private int reportedContent;
	@Column
	private int reportType;
	@Column
	private String reportText;
	@Column
	private LocalDateTime reportDate;
}
