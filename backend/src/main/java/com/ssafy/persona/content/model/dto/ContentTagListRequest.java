package com.ssafy.persona.content.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentTagListRequest {
	private String tagText;
	private int characterNow;

}
