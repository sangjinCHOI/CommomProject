package com.ssafy.persona.character.service;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.character.model.dto.AlarmGetResponse;

public interface AlarmService {

	int createAlarm(AlarmCreateRequest request);
	
	List<AlarmGetResponse> getAlarmList(int characterSeq);
	
	AlarmGetResponse alarmRead(int alarmSeq);
	
	String makeAlarmTarget(AlarmCreateRequest request);
}
