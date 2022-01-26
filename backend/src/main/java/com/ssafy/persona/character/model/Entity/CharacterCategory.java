package com.ssafy.persona.character.model.Entity;

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
public class CharacterCategory {
	@Id
	private int characterCategorySeq;
	@Column
	private String characterCategoryName;
	@Column
	private boolean characterCategoryIsActive;
}
