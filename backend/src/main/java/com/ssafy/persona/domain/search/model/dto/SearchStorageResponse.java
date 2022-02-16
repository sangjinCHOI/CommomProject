package com.ssafy.persona.domain.search.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class SearchStorageResponse {
	private int storageSeq;
	private String storageName;
	private String filePath;
	private String fileName;
	private String nickname;

}
