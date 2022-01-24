package com.ssafy.persona.content.model.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
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
}
