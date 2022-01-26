package com.ssafy.persona.character.service;

import java.util.List;

import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.character.model.dto.CharacterUpdateRequest;

public interface CharacterService {
	int regist(CharacterCreatRequest ccr);

	int update(CharacterUpdateRequest cur);

	int delete(CharacterDeleteRequest cdr);

	CharacterGetResponse detail(int characterSeq);

	List<CharacterGetResponse> list(int userSeq);

}
