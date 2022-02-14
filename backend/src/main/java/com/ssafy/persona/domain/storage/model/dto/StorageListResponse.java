package com.ssafy.persona.domain.storage.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class StorageListResponse {
	private int storageSeq;
	private String storageName;
	private boolean storagePublic;
	private String storageImagePath;
	private String storageImageName;

}
