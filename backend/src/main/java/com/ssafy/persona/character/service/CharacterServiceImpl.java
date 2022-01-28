package com.ssafy.persona.character.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.persona.character.mapper.CharacterMapper;
import com.ssafy.persona.character.model.dto.AlarmSettingUpdateRequest;
import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.character.model.dto.CharacterUpdateRequest;
import com.ssafy.persona.user.mapper.UserMapper;

@Service
public class CharacterServiceImpl implements CharacterService {

	@Autowired
	CharacterMapper characterMapper;
	
	@Autowired
	UserMapper userMapper;
	
	@Transactional
	@Override
	public int regist(CharacterCreatRequest request) {
		int result = 0; // 기본 상태 
		int creatableCount = userMapper.getCreatableCount(request.getUserSeq());
		int nowCount = characterMapper.getCharacterCount(request.getUserSeq());
		
		if (nowCount < creatableCount) {
			result = characterMapper.regist(request);
		}
		return result;
		// 0이면 생성 불가능(갯수제한) 1이면 잘 생성됨
	}

	@Override
	public int update(CharacterUpdateRequest request) {
		return characterMapper.update(request);
	}

	@Override
	public int delete(CharacterDeleteRequest request) {
		return characterMapper.delete(request);
	}

	@Override
	public CharacterGetResponse detail(int characterSeq) {
		return characterMapper.detail(characterSeq);
	}

	@Override
	public List<CharacterGetResponse> list(int userSeq) {
		return characterMapper.list(userSeq);
	}

	@Override
	public int updateAlarmStatus(AlarmSettingUpdateRequest request) {
		return characterMapper.updateAlarmStatus(request);
	}

}
