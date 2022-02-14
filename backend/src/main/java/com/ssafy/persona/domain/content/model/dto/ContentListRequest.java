package com.ssafy.persona.domain.content.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
@Builder
public class ContentListRequest {
	private String condition;
	private int characterNow;
	private int characterSeq;
	private String tagText;
	private String contentText;
}
