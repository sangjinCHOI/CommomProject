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
	private String targetNickname;
	private int targetSeq;
	private boolean alarmIsRead;
	private LocalDateTime alarmDate;
	

}
