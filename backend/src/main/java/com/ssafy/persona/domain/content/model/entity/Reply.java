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
public class Reply {
	@Id
	private int replySeq;
	@Column
	private int contentSeq;
	@Column
	private int characterSeq;
	@Column
	private String replyText;
	@Column
	private int replyLike;
	@Column
	private boolean replyIsActive;
	@Column
	private boolean replyIsReport;
	@Column
	private LocalDateTime replyCreatedDate;
	@Column
	private LocalDateTime replyModifiedDate;
	@Column
	private int replyIsLike;
}
