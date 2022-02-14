package com.ssafy.persona.domain.storage.model.dto;

import com.ssafy.persona.domain.storage.model.entity.StoredContent;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentStoreRequest {
	private int storageSeq;
	private int contentSeq;
	private int characterSeq;
	
	public StoredContent toStoredContent() {
		return StoredContent.builder()
							.storageSeq(storageSeq)
							.contentSeq(contentSeq)
							.characterSeq(characterSeq)
							.build();
	}
	
}
