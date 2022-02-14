package com.ssafy.persona.domain.character.model.Entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class UserAchievement {
	@Id
	private int userAchievementSeq;
	@Column	private int characterSeq;
	@Column	private int achievementSeq;
	@Column	private LocalDateTime userAchivementDate;
}
