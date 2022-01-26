package com.ssafy.persona.character.model.dto;

import com.ssafy.persona.character.model.Entity.CharacterEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class AlarmUpdateRequest {
	private int characterSeq;
	private boolean alarmAllow;
	private boolean likeAlarm;
	private boolean replyAlarm;
	private boolean followAlarm;
	private boolean modifyAlarm;

	public CharacterEntity toCharacterEntity() {
		return CharacterEntity.builder()
				.characterSeq(characterSeq)
				.alarmAllow(alarmAllow)
				.likeAlarm(likeAlarm)
				.replyAlarm(replyAlarm)
				.followAlarm(followAlarm)
				.modifyAlarm(modifyAlarm)
				.build();
	}
}
