package com.ssafy.persona.domain.content.model.dto;

import java.time.LocalDateTime;

import com.ssafy.persona.domain.content.model.entity.Reply;

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
	
	public ReplyGetResponse(Reply reply) {
		super();
		this.replySeq = reply.getReplySeq();
		this.characterSeq = reply.getCharacterSeq();
		this.replyText = reply.getReplyText();
		this.replyLike = reply.getReplyLike();
		this.replyCreatedDate = reply.getReplyCreatedDate();
		this.replyModifiedDate = reply.getReplyModifiedDate();
		this.replyIsLike = reply.getReplyIsLike();
	}
}