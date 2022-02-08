package com.ssafy.persona.storage.model.dto;

import com.ssafy.persona.storage.model.entity.Storage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class StorageModifyRequest {
	private int characterSeq;
	private int storageSeq;
	private String storageName;
	private boolean storagePublic;
	
	public Storage toStorage() {
		return Storage.builder()
					  .characterSeq(characterSeq)
					  .storageSeq(storageSeq)
					  .storageName(storageName)
					  .storagePublic(storagePublic)
					  .build();
	}
}
