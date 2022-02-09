package com.ssafy.persona.content.model.dto;

import com.ssafy.persona.content.model.entity.Content;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentCreateRequest {
	private int contentSeq;
	private int characterSeq;
	private int categoryNumber;
	private String contentText;
	private boolean contentIsPublic;
	private boolean contentIsMedia;
	
	public Content toContent() {
		return Content.builder()
					  .characterSeq(characterSeq)
					  .categoryNumber(categoryNumber)
					  .contentText(contentText)
					  .contentIsPublic(contentIsPublic)
					  .contentIsMedia(contentIsMedia)
					  .build();
	}

	public void setContentSeq(int contentSeq) {
		this.contentSeq = contentSeq;
	}
}
