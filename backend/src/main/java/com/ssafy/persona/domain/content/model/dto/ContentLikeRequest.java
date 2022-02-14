package com.ssafy.persona.domain.content.model.dto;

import com.ssafy.persona.domain.content.model.entity.ContentLike;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentLikeRequest {
	private int contentSeq;
	private int characterSeq;
	
	public ContentLike toContentLike() {
		return ContentLike.builder()
				 	      .contentSeq(contentSeq)
				 	      .characterSeq(characterSeq)
				 	      .build();
	}
}