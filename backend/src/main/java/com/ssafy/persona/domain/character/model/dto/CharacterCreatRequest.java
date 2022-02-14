package com.ssafy.persona.domain.character.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class CharacterCreatRequest {
	private int characterSeq;
	private MultipartFile[] myfile;
	private int userSeq;
	private int categoryNumber;
	private String nickname;
	private String introduction;
	
	public void setCharacterSeq(int characterSeq) {
		this.characterSeq = characterSeq;
	}
}
