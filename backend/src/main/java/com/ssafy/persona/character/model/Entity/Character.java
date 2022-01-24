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
public class Character {
	private int characterSeq;
	private int userSeq;
	private int categorySeq;
	private String nickname;
	private String introduction;
	private boolean alarmAllow;
	private boolean likeAlarm;
	private boolean replyAlarm;
	private boolean followAlarm;
	private boolean modifyAlarm;
	private int reportedTime;
	private boolean characterActive;
	private String characterDeleteReason;
	private LocalDateTime characterCreatedDate;
	private LocalDateTime characterModifiedDate;
	
}
