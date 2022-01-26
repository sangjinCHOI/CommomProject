package com.ssafy.persona.character.model.dto;

import java.time.LocalDateTime;

import com.ssafy.persona.character.model.Entity.Alarm;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class AlarmCreateRequest {
	private int userSeq;
	private int characterSeq;
	private int alarmType;
	private String alarmText;
	private LocalDateTime alarmDate;
	

	public Alarm toCharacterEntity() {
		return Alarm.builder()
				.userSeq(userSeq)
				.characterSeq(characterSeq)
				.alarmType(alarmType)
				.alarmText(alarmText)
				.alarmDate(alarmDate)
				.build();
	}
}
