package com.ssafy.persona.character.service;

import java.util.List;

import com.ssafy.persona.character.model.dto.AchievementGetRequest;
import com.ssafy.persona.character.model.dto.AchievementGetResponse;

public interface AchievementService {

	List<AchievementGetResponse> getAchievementList(AchievementGetRequest request);
	
}
