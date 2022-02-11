package com.ssafy.persona.storage.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class StorageContentListRequest {
	private int storageSeq;
	private int characterNow;
}
