package com.ssafy.persona.character.model.Entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Achievement {
	private int achievementSeq;
	private String achievementName;
	private String achievementDescription;
	private String achievementCondition;
	private int achievementType;
	private int achievementLevel;
	private boolean achievementIsActive;
	private LocalDateTime achievementCreatedDate;
}
