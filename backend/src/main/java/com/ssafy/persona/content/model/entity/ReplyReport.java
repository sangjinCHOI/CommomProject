package com.ssafy.persona.content.model.entity;

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
public class ReplyReport {
	@Id
	private int reportReplySeq;
	@Column
	private int reportingCharacter;
	@Column
	private int reportedReply;
	@Column
	private int reportType;
	@Column
	private String reportText;
	@Column
	private LocalDateTime reportDate;
}
