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
	public int follow(FollowRequest fr) {
		return followMapper.follow(fr);
	}

	@Override
	public int unFollow(FollowRequest fr) {
		return followMapper.unFollow(fr);
	}

	@Override
	public List<FollowerListResponse> getFollowerList(FollowerListRequest flr) {
		return followMapper.getFollowerList(flr);
	}

	@Override
	public List<Integer> getFolloweeList(FolloweeListRequest flr) {
		return followMapper.getFolloweeList(flr);
	}

}
