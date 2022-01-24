package com.ssafy.persona.character.model.Entity;

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
public class CharacterCategory {
	private int characterCategorySeq;
	private String characterCategoryName;
	private boolean characterCategoryIsActive;
}
