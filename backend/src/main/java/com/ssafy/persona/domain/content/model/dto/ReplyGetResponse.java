package com.ssafy.persona.domain.content.model.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class ReplyGetResponse {
	private int replySeq;
	private int characterSeq;
	private String replyText;
	private int replyLike;
	private LocalDateTime replyCreatedDate;
	private LocalDateTime replyModifiedDate;
	private int replyIsLike;
	private String replyWriter;
	private String writerProfile;
	
}
