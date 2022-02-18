package com.ssafy.persona.domain.character.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
@Builder
public class AlarmCreateRequest {
	private int characterSeq;
	private int alarmType;
	private String alarmText;
	private String relationTb;
	private int targetSeq;
	
	public void setAlarmText(String alarmText) {
		this.alarmText = alarmText;
	}
}
