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
public class Alarm {
	private int alarmSeq;
	private int userSeq;
	private int characterSeq;
	private String alarmType;
	private String alarmText;
	private LocalDateTime alarmDate;
}
