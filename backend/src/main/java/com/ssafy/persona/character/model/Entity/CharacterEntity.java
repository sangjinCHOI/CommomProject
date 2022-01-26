package com.ssafy.persona.character.model.Entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
public class CharacterEntity {
	@Id
	private int characterSeq;
	@Column
	private int userSeq;
	@Column
	private int categorySeq;
	@Column
	private String nickname;
	@Column
	private String introduction;
	@Column
	private int representativeAchievement;
	@Column
	private boolean alarmAllow;
	@Column
	private boolean likeAlarm;
	@Column
	private boolean replyAlarm;
	@Column
	private boolean followAlarm;
	@Column
	private boolean modifyAlarm;
	@Column
	private int reportedTime;
	@Column
	private boolean characterActive;
	@Column
	private char characterDeleteReason;
	@Column
	private LocalDateTime characterCreatedDate;
	@Column
	private LocalDateTime characterModifiedDate;

}
