package com.ssafy.persona.character.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.character.mapper.CharacterMapper;
import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.character.model.dto.CharacterUpdateRequest;

@Service
public class CharacterServiceImpl implements CharacterService {

	@Autowired
	CharacterMapper characterMapper;
	
	@Override
	public int regist(CharacterCreatRequest ccr) {
		return characterMapper.regist(ccr);
	}

	@Override
	public int update(CharacterUpdateRequest cur) {
		return characterMapper.update(cur);
	}

	@Override
	public int delete(CharacterDeleteRequest cdr) {
		return characterMapper.delete(cdr);
	}

	@Override
	public CharacterGetResponse detail(int characterSeq) {
		return characterMapper.detail(characterSeq);
	}

	@Override
	public List<CharacterGetResponse> list(int userSeq) {
		return characterMapper.list(userSeq);
	}

}
