package com.ssafy.persona.storage.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class SendStorageCreateRequest {
	private int characterSeq;
	private String storageName;
	private boolean storagePublic;
}
