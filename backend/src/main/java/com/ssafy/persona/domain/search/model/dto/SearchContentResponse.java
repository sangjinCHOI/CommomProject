package com.ssafy.persona.domain.search.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class SearchContentResponse {
	private int characterSeq;
	private String nickname;
	private String filePath;
	private String fileName;
	private int contentSeq;
	private String contentText;

}
