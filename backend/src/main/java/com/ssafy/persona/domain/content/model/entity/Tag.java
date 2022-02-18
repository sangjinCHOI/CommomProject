package com.ssafy.persona.domain.content.model.entity;

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
public class Tag {
	@Id
	private int tagSeq;
	@Column
	private int contentSeq;
	@Column
	private String tagText;
}
