package com.ssafy.persona.character.model.Entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class Achievement {
	@Id
	private int achievementSeq;
	@Column
	private String achievementName;
	@Column
	private String achievementDescription;
	@Column
	private String achievementCondition;
	@Column
	private int achievementType;
	@Column
	private int achievementLevel;
	@Column
	private boolean achievementIsActive;
	@Column
	private LocalDateTime achievementCreatedDate;
}
