package com.ssafy.persona.search.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class HistoryCreateRequest {
	private int characterSeq;
	private String searchHistoryText;
}
