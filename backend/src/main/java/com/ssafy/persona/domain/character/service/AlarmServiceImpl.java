package com.ssafy.persona.domain.character.service;

import java.util.List;

import com.ssafy.persona.domain.character.mapper.AlarmMapper;
import com.ssafy.persona.domain.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.domain.character.model.dto.AlarmGetResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
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

	@Override
	public String makeAlarmTarget(AlarmCreateRequest request) {
		return alarmMapper.makeAlarmTarget(request);
	}

}
