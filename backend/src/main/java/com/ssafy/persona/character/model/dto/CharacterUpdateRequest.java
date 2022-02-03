package com.ssafy.persona.character.model.dto;

import com.ssafy.persona.character.model.Entity.CharacterEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class CharacterUpdateRequest {
	private int characterSeq;
	private String nickname;
	private String introduction;
	private int representativeAchievement;

	public CharacterEntity toCharacterEntity() {
		return CharacterEntity.builder()
				.characterSeq(characterSeq)
				.nickname(nickname)
				.introduction(introduction)
				.representativeAchievement(representativeAchievement)
				.build();
	}
}
