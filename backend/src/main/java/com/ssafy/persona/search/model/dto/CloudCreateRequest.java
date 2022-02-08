package com.ssafy.persona.search.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
@Builder
public class CloudCreateRequest {
	private String searchWord;
	private int searchWeight;
	private String searchDate;

	public void setSearchWeight(int searchWeight) {
		this.searchWeight = searchWeight;
	}
}

