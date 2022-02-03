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
	private String relationTb;
	private int targetSeq;
	private boolean alarmIsRead;
	private LocalDateTime alarmDate;
	
	public AlarmGetResponse(Alarm alarm) {
		super();
		this.alarmSeq = alarm.getAlarmSeq();
		this.alarmType = alarm.getAlarmType();
		this.alarmText = alarm.getAlarmText();
		this.relationTb = alarm.getRelationTb();
		this.targetSeq = alarm.getTargetSeq();
		this.alarmIsRead = alarm.isAlarmIsRead();
		this.alarmDate = alarm.getAlarmDate();
	}
}
