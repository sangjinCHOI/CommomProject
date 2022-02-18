package com.ssafy.persona.domain.character.service;

import java.util.List;

import com.ssafy.persona.domain.character.model.AlarmEnum;
import com.ssafy.persona.domain.character.model.dto.AchievementRegistRequest;
import com.ssafy.persona.domain.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.domain.character.model.dto.FollowRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.persona.domain.character.mapper.AchievementMapper;
import com.ssafy.persona.domain.character.mapper.AlarmMapper;
import com.ssafy.persona.domain.character.mapper.FollowMapper;
import com.ssafy.persona.domain.character.model.dto.FolloweeListRequest;
import com.ssafy.persona.domain.character.model.dto.FollowerListRequest;
import com.ssafy.persona.domain.character.model.dto.FollowerListResponse;

@Service
public class FollowServiceImpl implements FollowService {

	@Autowired
	FollowMapper followMapper;
	
	@Autowired
	AchievementMapper achievementMapper;
	
	@Autowired
	AlarmMapper alarmMapper;
	
	@Transactional
	@Override
	public int follow(FollowRequest request) {
		if (followMapper.followCheck(request) == 1) return 0;
		
		AchievementRegistRequest achievementRequest = AchievementRegistRequest.builder()
				.characterSeq(request.getFollower())
				.achievementSeq(6)
				.build();
		AlarmCreateRequest alarm = null;
		if (achievementMapper.checkIsGottenAchievement(achievementRequest) == 0) {
			achievementMapper.registCharacterAchievement(achievementRequest);
			alarm = AlarmCreateRequest.builder()
					.characterSeq(request.getFollower())
					.alarmType(7)
					.alarmText(AlarmEnum.ALARM_FOR_ACHIEVMENT.creatResultText("좋아해요"))
					.relationTb("tb_achievement")
					.targetSeq(request.getFollower())
					.build();
			
			alarmMapper.createAlarm(alarm);
		}
		
		achievementRequest = AchievementRegistRequest.builder()
				.characterSeq(request.getFollowee())
				.achievementSeq(8)
				.build();
		if (achievementMapper.checkIsGottenAchievement(achievementRequest) == 0) {
			achievementMapper.registCharacterAchievement(achievementRequest);
			
			alarm = AlarmCreateRequest.builder()
					.characterSeq(request.getFollowee())
					.alarmType(7)
					.alarmText(AlarmEnum.ALARM_FOR_ACHIEVMENT.creatResultText("1호 팬"))
					.relationTb("tb_achievement")
					.targetSeq(request.getFollowee())
					.build();
			
			alarmMapper.createAlarm(alarm);
		}
		
		return followMapper.follow(request);
	}

	@Override
	public int unFollow(FollowRequest request) {
		return followMapper.unFollow(request);
	}

	@Override
	public List<FollowerListResponse> getFollowerList(FollowerListRequest request) {
		return followMapper.getFollowerList(request);
	}

	@Override
	public List<Integer> getFolloweeList(FolloweeListRequest request) {
		return followMapper.getFolloweeList(request);
	}

}
