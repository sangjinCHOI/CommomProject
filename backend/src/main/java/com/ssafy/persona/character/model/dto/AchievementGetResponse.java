package com.ssafy.persona.character.model.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
public class AchievementGetResponse {

	private int achievementSeq;
	private String achievementName;
	private String achievementDescription;
	private String achievementCondition;
	private int achievementType;
	private int achievementLevel;
	private LocalDateTime achievementCreatedDate;
	private int isGained;
	
}
