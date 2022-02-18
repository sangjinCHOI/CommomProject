package com.ssafy.persona.domain.content.model.dto;

import com.ssafy.persona.domain.character.model.Entity.CharacterEntity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class LikeListResponse {
	private int characterSeq;
	private String nickname;
	
	public LikeListResponse(CharacterEntity characterEntity) {
		super();
		this.characterSeq = characterEntity.getCharacterSeq();
		this.nickname = characterEntity.getNickname();
	}
}
