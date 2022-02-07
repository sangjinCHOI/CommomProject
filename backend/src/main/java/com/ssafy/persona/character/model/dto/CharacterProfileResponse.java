package com.ssafy.persona.character.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
@AllArgsConstructor
public class CharacterProfileResponse {
	private int characterSeq;
	private int representativeAchievement;
	private String achievementImage;
	private String categoryName;
	private int contentCount;
	private int followerCount;
	private int followeeCount;
	
}
