package com.ssafy.persona.domain.character.service;

import java.util.List;

import com.ssafy.persona.domain.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.domain.character.model.dto.AlarmGetResponse;

public interface AlarmService {

	int createAlarm(AlarmCreateRequest request);
	
	List<AlarmGetResponse> getAlarmList(int characterSeq);
	
	AlarmGetResponse alarmRead(int alarmSeq);
	
	String makeAlarmTarget(AlarmCreateRequest request);
}
