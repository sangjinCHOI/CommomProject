package com.ssafy.persona.content.model.dto;

import java.time.LocalDateTime;

import com.ssafy.persona.content.model.entity.Reply;

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
	
	public ReplyGetResponse(Reply reply) {
		super();
		this.replySeq = reply.getReplySeq();
		this.characterSeq = reply.getCharacterSeq();
		this.replyText = reply.getReplyText();
		this.replyLike = reply.getReplyLike();
		this.replyCreatedDate = reply.getReplyCreatedDate();
		this.replyModifiedDate = reply.getReplyModifiedDate();
	}
}
