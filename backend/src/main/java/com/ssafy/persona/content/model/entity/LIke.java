package com.ssafy.persona.content.model.entity;

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
public class LIke {
	@Id
	private int likeSeq;
	@Column
	private char likeTarget;
	@Column
	private int likeRelationSeq;
	@Column
	private int characterSeq;
}
