package com.ssafy.persona.character.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.character.model.dto.AlarmSettingUpdateRequest;
import com.ssafy.persona.character.model.dto.CategoryGetResponse;
import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.character.model.dto.CharacterProfileResponse;
import com.ssafy.persona.character.model.dto.CharacterUpdateRequest;

@Mapper
public interface CharacterMapper {
	int regist(CharacterCreatRequest request);

	int update(CharacterUpdateRequest request);

	int delete(CharacterDeleteRequest request);

	int setCharacterProfileDefault(int characterSeq);
	
	CharacterGetResponse detail(int characterSeq);

	CharacterProfileResponse getCharacterProfile(String nickname);
	
	int getCharacterCount(int userSeq);
	
	List<CharacterGetResponse> list(int userSeq);

	int updateAlarmStatus(AlarmSettingUpdateRequest request);
	
	int checkCharacterNickname(String nickname);
	
	List<CategoryGetResponse> categoryList();
}
