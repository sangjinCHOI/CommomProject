package com.ssafy.persona.domain.search.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
@Builder
public class HistoryGetRequest {
	private int characterSeq;
	private String searchWord;

}

