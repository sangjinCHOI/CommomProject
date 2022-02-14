package com.ssafy.persona.domain.character.mapper;

import java.util.List;

import com.ssafy.persona.domain.character.model.dto.AlarmCreateRequest;
import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.domain.character.model.dto.AlarmGetResponse;

@Mapper
public interface AlarmMapper {

	int createAlarm(AlarmCreateRequest request);
	
	int alarmReadHandling(int alarmSeq);
	
	List<AlarmGetResponse> getAlarmList(int characterSeq);

	AlarmGetResponse alarmDetalForMove(int alarmSeq);

	String makeAlarmTarget(AlarmCreateRequest request);
}
