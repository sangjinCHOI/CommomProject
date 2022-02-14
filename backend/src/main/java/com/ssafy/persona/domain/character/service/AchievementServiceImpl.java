package com.ssafy.persona.domain.character.service;

import java.util.List;

import com.ssafy.persona.domain.character.mapper.AchievementMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.domain.character.model.dto.AchievementGetRequest;
import com.ssafy.persona.domain.character.model.dto.AchievementGetResponse;

@Service
public class AchievementServiceImpl implements AchievementService{

	@Autowired
    AchievementMapper achievementMapper;
	
	@Override
	public List<AchievementGetResponse> getAchievementList(AchievementGetRequest request) {
		return achievementMapper.getAchievementList(request);
	}
}
