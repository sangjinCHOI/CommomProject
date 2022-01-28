package com.ssafy.persona.user.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AlarmEnum {

	ALARM_FOR_FOLLOW(1, "", "님이(가) 회원님을 팔로우 하기 시작합니다."),
	ALARM_STORAGE_CREATE(2, "저장소", "이(가) 생성되었습니다."),
	ALARM_STORAGE_DELETE(3, "저장소  ", "이(가) 삭제되었습니다."),
	ALARM_STORAGE_CONTENT_ADD(4, "저장소 ", "에 게시물이 추가되었습니다."),
	ALARM_STORAGE_CONTENT_DELETE(5, "저장소 ", "의 게시물이 삭제되었습니다."),
	ALARM_STORAGE_CONTENT_UPDATE(6, "저장소 ", "의 게시물이 수정되었습니다."),
	ALARM_FOR_ACHIEVMENT(7, "", "업적을 달성했습니다.");
	
	private int alarmType;
	private String alarmTextFront;
	private String alarmTextBack;
	
	public String creatResultText(String variableText) {
		return alarmTextFront.concat(variableText+alarmTextBack);
	}
	
}
