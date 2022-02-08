package com.ssafy.persona.character.model.dto;

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
	private int categorySeq;
	private String nickname;
	private String introduction;
	
	public void setCaracterSeq(int characterSeq) {
		this.characterSeq = characterSeq;
	}
}
