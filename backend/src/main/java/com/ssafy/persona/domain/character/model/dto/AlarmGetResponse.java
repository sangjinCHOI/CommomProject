package com.ssafy.persona.domain.character.model.dto;

import java.time.LocalDateTime;

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
