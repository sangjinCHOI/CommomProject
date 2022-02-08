package com.ssafy.persona.character.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.character.mapper.FollowMapper;
import com.ssafy.persona.character.model.dto.FollowRequest;
import com.ssafy.persona.character.model.dto.FolloweeListRequest;
import com.ssafy.persona.character.model.dto.FollowerListRequest;
import com.ssafy.persona.character.model.dto.FollowerListResponse;

@Service
public class FollowServiceImpl implements FollowService {

	@Autowired
	FollowMapper followMapper;
	
	@Override
	public int follow(FollowRequest request) {
		int result = followMapper.followCheck(request) == 0 ? followMapper.follow(request) : 0;
		
		return result;
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
