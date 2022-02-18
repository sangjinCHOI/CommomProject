package com.ssafy.persona.domain.character.model.dto;

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
	private String introduction;
	private int representativeAchievement;
	private String profileImagePath;
	private String profileImageName;
	private String achievementImagePath;
	private String achievementImageName;
	private String categoryName;
	private int contentCount;
	private int followerCount;
	private int followeeCount;
	
}
