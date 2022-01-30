package com.ssafy.persona.content.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentPersonListRequest {
	private int characterSeq;
	private int characterNow;

}
