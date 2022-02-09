package com.ssafy.persona.character.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class CharacterUpdateRequest {
	private MultipartFile[] myfile;
	private int characterSeq;
	private String nickname;
	private String introduction;
	private int representativeAchievement;

}
