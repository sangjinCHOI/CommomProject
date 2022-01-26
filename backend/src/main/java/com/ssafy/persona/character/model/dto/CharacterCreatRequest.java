package com.ssafy.persona.character.model.dto;

import com.ssafy.persona.character.model.Entity.CharacterEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class CharacterCreatRequest {
	private int userSeq;
	private int categorySeq;
	private String nickname;
	private String introduction;

	public CharacterEntity toCharacterEntity() {
		return CharacterEntity.builder()
				.userSeq(userSeq)
				.categorySeq(categorySeq)
				.nickname(nickname)
				.introduction(introduction)
				.build();
	}
}
