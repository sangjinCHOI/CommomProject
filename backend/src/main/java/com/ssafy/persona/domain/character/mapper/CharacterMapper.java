package com.ssafy.persona.domain.character.mapper;

import java.util.List;

import com.ssafy.persona.domain.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.domain.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.domain.character.model.dto.CharacterGetResponse;
import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.domain.character.model.dto.AlarmSettingUpdateRequest;
import com.ssafy.persona.domain.character.model.dto.CategoryGetResponse;
import com.ssafy.persona.domain.character.model.dto.CharacterProfileResponse;
import com.ssafy.persona.domain.character.model.dto.CharacterUpdateRequest;

@Mapper
public interface CharacterMapper {
	int regist(CharacterCreatRequest request);

	int update(CharacterUpdateRequest request);

	int delete(CharacterDeleteRequest request);

	int setCharacterProfileDefault(int characterSeq);

	int deleteAchievement(int characterSeq);
	
	int checkNicknameDuplicate(String nickname);
	
	CharacterGetResponse detail(int characterSeq);

	CharacterProfileResponse getCharacterProfile(String nickname);
	
	int getCharacterCount(int userSeq);
	
	List<CharacterGetResponse> list(int userSeq);

	int updateAlarmStatus(AlarmSettingUpdateRequest request);
	
	int checkCharacterNickname(String nickname);
	
	List<CategoryGetResponse> categoryList();
}
