package com.ssafy.persona.character.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.character.model.dto.AchievementGetRequest;
import com.ssafy.persona.character.model.dto.AchievementGetResponse;

@Mapper
public interface AchievementMapper {

	List<AchievementGetResponse> getAchievementList(AchievementGetRequest request);
}
