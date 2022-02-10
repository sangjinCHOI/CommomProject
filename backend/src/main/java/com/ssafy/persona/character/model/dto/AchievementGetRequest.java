package com.ssafy.persona.character.model.dto;

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
}