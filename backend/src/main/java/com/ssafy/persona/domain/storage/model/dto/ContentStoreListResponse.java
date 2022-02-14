package com.ssafy.persona.domain.storage.model.dto;

import com.ssafy.persona.domain.character.model.Entity.CharacterEntity;
import com.ssafy.persona.domain.storage.model.entity.StoredContent;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class ContentStoreListResponse {
	private int characterSeq;
	private String nickname;
	
	public ContentStoreListResponse(StoredContent storedContent) {
		super();
		this.characterSeq = storedContent.getCharacterSeq();
	}
	
	public ContentStoreListResponse(CharacterEntity characterEntity) {
		super();
		this.nickname = characterEntity.getNickname();
	}
}
