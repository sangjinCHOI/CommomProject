package com.ssafy.persona.search.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class SearchPeopleResponse {
	private int characterSeq;
	private String nickname;
	private int filePath;

}
