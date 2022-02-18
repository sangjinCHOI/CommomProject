package com.ssafy.persona.domain.content.model.dto;

import com.ssafy.persona.domain.content.model.entity.Reply;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ReplyCreateRequest {
	private int contentSeq;
	private int characterSeq;
	private String replyText;
	
	public Reply toReply() {
		return Reply.builder()
					.contentSeq(contentSeq)
					.characterSeq(characterSeq)
					.replyText(replyText)
					.build();
	}
	
}
