package com.ssafy.persona.domain.search.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
@Builder
public class RealTimeRequest {
	private String searchDate;
	private String searchWord;

}

