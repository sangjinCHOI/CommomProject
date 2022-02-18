package com.ssafy.persona.domain.character.model.dto;

import com.ssafy.persona.domain.character.model.Entity.CharacterEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class CharacterDeleteRequest {
	private int characterSeq;
	private int characterDeleteReason;

	public CharacterEntity toCharacterEntity() {
		return CharacterEntity.builder()
				.characterSeq(characterSeq)
				.characterDeleteReason(characterDeleteReason)
				.build();
	}
}
