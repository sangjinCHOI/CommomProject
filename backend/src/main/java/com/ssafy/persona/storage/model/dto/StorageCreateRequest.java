package com.ssafy.persona.storage.model.dto;

import com.ssafy.persona.storage.model.entity.Storage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class StorageCreateRequest {
	private int characterSeq;
	private String storageName;
	private boolean storagePublic;
	
	public Storage toStorage() {
		return Storage.builder()
					  .characterSeq(characterSeq)
					  .storageName(storageName)
					  .storagePublic(storagePublic)
					  .build();
	}

}
