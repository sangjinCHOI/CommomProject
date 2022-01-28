package com.ssafy.persona.character.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.character.model.dto.AlarmGetResponse;

@Mapper
public interface AlarmMapper {

	int createAlarm(AlarmCreateRequest request);
	
	int alarmReadHandling(int alarmSeq);
	
	List<AlarmGetResponse> getAlarmList(int characterSeq);

	AlarmGetResponse alarmDetalForMove(int alarmSeq);
}
