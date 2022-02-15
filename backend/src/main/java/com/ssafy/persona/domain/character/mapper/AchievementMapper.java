package com.ssafy.persona.domain.character.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.domain.character.model.dto.AchievementGetRequest;
import com.ssafy.persona.domain.character.model.dto.AchievementGetResponse;
import com.ssafy.persona.domain.character.model.dto.AchievementRegistRequest;

@Mapper
public interface AchievementMapper {

	List<AchievementGetResponse> getAchievementList(AchievementGetRequest request);

	int registCharacterAchievement(AchievementRegistRequest request);

	int checkIsGottenAchievement(AchievementRegistRequest request);
}
