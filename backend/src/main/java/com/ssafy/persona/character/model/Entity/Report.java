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
public class Report {
	@Id
	private int reportSeq;
	@Column
	private int reportingCharacter;
	@Column
	private int reporedCharacter;
	@Column
	private int reportType;
	@Column
	private String reportContentType;
	@Column
	private int reportRelationSeq;
	@Column
	private LocalDateTime reporedDate;
}
