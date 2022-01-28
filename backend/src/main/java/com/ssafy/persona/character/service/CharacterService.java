package com.ssafy.persona.character.service;

import java.util.List;

import com.ssafy.persona.character.model.dto.AlarmSettingUpdateRequest;
import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.character.model.dto.CharacterUpdateRequest;

public interface CharacterService {
	int regist(CharacterCreatRequest request);

	int update(CharacterUpdateRequest request);

	int delete(CharacterDeleteRequest request);

	CharacterGetResponse detail(int characterSeq);

	List<CharacterGetResponse> list(int userSeq);

	int updateAlarmStatus(AlarmSettingUpdateRequest request);
}
