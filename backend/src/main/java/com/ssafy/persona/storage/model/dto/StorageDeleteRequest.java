package com.ssafy.persona.storage.model.dto;

import com.ssafy.persona.storage.model.entity.Storage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class StorageDeleteRequest {
	private int characterSeq;
	private int storageSeq;
	
	public Storage toStorage() {
		return Storage.builder()
					  .characterSeq(characterSeq)
					  .storageSeq(storageSeq)
					  .build();
	}
	
}
