package com.ssafy.persona.domain.character.service;

import java.util.List;

import com.ssafy.persona.domain.character.model.dto.AchievementGetRequest;
import com.ssafy.persona.domain.character.model.dto.AchievementGetResponse;

public interface AchievementService {

	List<AchievementGetResponse> getAchievementList(AchievementGetRequest request);
	
}
