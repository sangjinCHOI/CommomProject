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
public class UserAchievement {
	private int userAchievementSeq;
	private int characterSeq;
	private int achievementSeq;
	private LocalDateTime userAchivementDate;
}
