package com.ssafy.persona.character.model.Entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Alarm {
	@Id
	private int alarmSeq;
	@Column
	private int userSeq;
	@Column
	private int characterSeq;
	@Column
	private String alarmType;
	@Column
	private String alarmText;
	@Column
	private LocalDateTime alarmDate;
}
