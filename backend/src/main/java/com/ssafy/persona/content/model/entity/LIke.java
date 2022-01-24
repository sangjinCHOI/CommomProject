package com.ssafy.persona.content.model.entity;

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
public class LIke {
	private int likeSeq;
	private char likeTarget;
	private int likeRelationSeq;
	private int characterSeq;
}
