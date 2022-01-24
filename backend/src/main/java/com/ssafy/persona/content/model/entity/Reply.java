package com.ssafy.persona.content.model.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Reply {
	private int replySeq;
	private int contentSeq;
	private int characterSeq;
	private String replyText;
	private int replyLike;
	private boolean replyIsActive;
	private boolean replyIsReport;
	private LocalDateTime replyCreatedDate;
	private LocalDateTime replyModifiedDate;
}
