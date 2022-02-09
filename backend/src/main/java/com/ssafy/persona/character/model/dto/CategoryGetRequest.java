package com.ssafy.persona.character.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
@Builder
public class CategoryGetRequest {
	private String order;
	private String searchText;
	

}
