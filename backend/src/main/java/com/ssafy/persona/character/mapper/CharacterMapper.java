package com.ssafy.persona.character.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.character.model.dto.AlarmSettingUpdateRequest;
import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.character.model.dto.CharacterUpdateRequest;

@Mapper
public interface CharacterMapper {
	int regist(CharacterCreatRequest request);

	int update(CharacterUpdateRequest request);

	int delete(CharacterDeleteRequest request);

	CharacterGetResponse detail(int characterSeq);

	int getCharacterCount(int userSeq);
	
	List<CharacterGetResponse> list(int userSeq);

	int updateAlarmStatus(AlarmSettingUpdateRequest request);
	
}
