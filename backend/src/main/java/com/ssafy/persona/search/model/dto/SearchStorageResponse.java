package com.ssafy.persona.search.model.dto;

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

}
