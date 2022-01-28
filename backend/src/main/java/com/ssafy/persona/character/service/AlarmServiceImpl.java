package com.ssafy.persona.character.service;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.ssafy.persona.character.mapper.AlarmMapper;
import com.ssafy.persona.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.character.model.dto.AlarmGetResponse;

@Mapper
public class AlarmServiceImpl implements AlarmService{

	@Autowired
	AlarmMapper alarmMapper;
	
	@Override
	public int createAlarm(AlarmCreateRequest request) {
		return alarmMapper.createAlarm(request);
	}

	@Override
	public List<AlarmGetResponse> getAlarmList(int characterSeq) {
		return alarmMapper.getAlarmList(characterSeq);
	}

	@Override
	public AlarmGetResponse alarmRead(int alarmSeq) {
		alarmMapper.alarmReadHandling(alarmSeq);
		
		return alarmMapper.alarmDetalForMove(alarmSeq);
	}

}
