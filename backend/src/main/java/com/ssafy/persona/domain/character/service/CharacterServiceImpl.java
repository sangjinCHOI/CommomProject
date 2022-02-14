package com.ssafy.persona.domain.character.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.persona.domain.character.mapper.CharacterMapper;
import com.ssafy.persona.domain.character.model.dto.AlarmSettingUpdateRequest;
import com.ssafy.persona.domain.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.domain.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.domain.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.domain.character.model.dto.CharacterProfileResponse;
import com.ssafy.persona.domain.character.model.dto.CharacterUpdateRequest;
import com.ssafy.persona.exception.handler.CustomException;
import com.ssafy.persona.exception.model.ErrorCode;
import com.ssafy.persona.domain.file.model.dto.FileUploadRequest;
import com.ssafy.persona.domain.file.service.FileServiceImpl;
import com.ssafy.persona.domain.user.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {

	@Autowired
	CharacterMapper characterMapper;
	
	@Autowired
	UserMapper userMapper;
	
	private final FileServiceImpl fileService;
	
	@Transactional
	@Override
	public int regist(CharacterCreatRequest request) {
		int result = 0; // 기본 상태 
		
		int check = characterMapper.checkCharacterNickname(request.getNickname());
		if (check == 1) throw new CustomException(ErrorCode.NICKNAME_CONFLICT);
		
		int creatableCount = userMapper.getCreatableCount(request.getUserSeq());
		int nowCount = characterMapper.getCharacterCount(request.getUserSeq());
		if (nowCount < creatableCount) {
			result = characterMapper.regist(request);
		}
		
		if (request.getMyfile() != null) {
			FileUploadRequest file = FileUploadRequest.builder()
					.myfile(request.getMyfile())
					.fileType('2')
					.relationTb("tb_character")
					.relationSeq(request.getCharacterSeq())
					.build();
			try {
				fileService.uploadFile(file);
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		return result;// 0이면 생성 불가능(갯수제한) 1이면 잘 생성됨
	}

	@Transactional
	@Override
	public int update(CharacterUpdateRequest request) {
		if (request.getMyfile() != null) {
			FileUploadRequest file = FileUploadRequest.builder()
					.myfile(request.getMyfile())
					.fileType('2')
					.relationTb("tb_character")
					.relationSeq(request.getCharacterSeq())
					.build();
			try {
				fileService.modifyFile(file);
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		
		return characterMapper.update(request);
	}

	@Override
	public int delete(CharacterDeleteRequest request) {
		return characterMapper.delete(request);
	}

	@Override
	public int setCharacterProfileDefault(int characterSeq) {
		return characterMapper.setCharacterProfileDefault(characterSeq);
	}
	
	@Override
	public CharacterGetResponse detail(int characterSeq) {
		return characterMapper.detail(characterSeq);
	}

	@Override
	public CharacterProfileResponse getCharacterProfile(String nickname) {
		return characterMapper.getCharacterProfile(nickname);
	}
	
	@Override
	public List<CharacterGetResponse> list(int userSeq) {
		return characterMapper.list(userSeq);
	}

	@Override
	public int updateAlarmStatus(AlarmSettingUpdateRequest request) {
		return characterMapper.updateAlarmStatus(request);
	}

	@Override
	public int checkCharacterNickname(String nickname) {
		return characterMapper.checkCharacterNickname(nickname);
	}

}
