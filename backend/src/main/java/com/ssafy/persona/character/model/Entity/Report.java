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
public class Report {
	private int reportSeq;
	private int reportingCharacter;
	private int reporedCharacter;
	private int reportType;
	private String reportContentType;
	private int reportRelationSeq;
	private LocalDateTime reporedDate;
}
