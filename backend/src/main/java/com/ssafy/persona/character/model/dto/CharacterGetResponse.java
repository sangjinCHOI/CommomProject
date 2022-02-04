package com.ssafy.persona.character.model.dto;

import java.time.LocalDateTime;

import com.ssafy.persona.character.model.Entity.CharacterEntity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class CharacterGetResponse {
	private int characterSeq;
	private int userSeq;
	private String nickname;
	private int categorySeq;
	private String introduction;
	private int representativeAchievement;
	private boolean alarmAllow;
	private boolean likeAlarm;
	private boolean replyAlarm;
	private boolean followAlarm;
	private boolean modifyAlarm;
	private int reportedTime;
	private boolean characterActive;
	private LocalDateTime characterCreatedDate;
	private LocalDateTime characterModifiedDate;

	public CharacterGetResponse(CharacterEntity ce) {
		this.characterSeq = ce.getCharacterSeq();
		this.userSeq = ce.getUserSeq();
		this.nickname = ce.getNickname();
		this.categorySeq = ce.getCategorySeq();
		this.introduction = ce.getIntroduction();
		this.representativeAchievement = ce.getRepresentativeAchievement();
		this.alarmAllow = ce.isAlarmAllow();
		this.likeAlarm = ce.isLikeAlarm();
		this.replyAlarm = ce.isReplyAlarm();
		this.followAlarm = ce.isFollowAlarm();
		this.modifyAlarm = ce.isModifyAlarm();
		this.reportedTime = ce.getReportedTime();
		this.characterActive = ce.isCharacterActive();
		this.characterCreatedDate = ce.getCharacterCreatedDate();
		this.characterModifiedDate = ce.getCharacterModifiedDate();
	}

}
