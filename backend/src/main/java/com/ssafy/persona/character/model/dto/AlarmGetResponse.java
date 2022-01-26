package com.ssafy.persona.character.model.dto;

import java.time.LocalDateTime;

import com.ssafy.persona.character.model.Entity.Alarm;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class AlarmGetResponse {
	private int alarmSeq;
	private int alarmType;
	private String alarmText;
	private LocalDateTime alarmDate;
	
	public AlarmGetResponse(Alarm alarm) {
		this.alarmSeq = alarm.getAlarmSeq();
		this.alarmType = alarm.getAlarmType();
		this.alarmText = alarm.getAlarmText();
		this.alarmDate = alarm.getAlarmDate();
	}
}
