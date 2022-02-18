package com.ssafy.persona.domain.character.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class AchievementGetRequest {
	private int characterSeq;
	private int achievementType;
	private int level;
	
	public AchievementGetRequest(int characterSeq) {
		super();
		this.characterSeq = characterSeq;
	}
}
