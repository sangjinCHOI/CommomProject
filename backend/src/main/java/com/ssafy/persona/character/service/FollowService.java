package com.ssafy.persona.character.service;

import java.util.List;

import com.ssafy.persona.character.model.dto.FollowRequest;
import com.ssafy.persona.character.model.dto.FolloweeListRequest;
import com.ssafy.persona.character.model.dto.FollowerListRequest;
import com.ssafy.persona.character.model.dto.FollowerListResponse;

public interface FollowService {
	int follow(FollowRequest fr);

	int unFollow(FollowRequest fr);

	List<FollowerListResponse> getFollowerList(FollowerListRequest flr);

	List<Integer> getFolloweeList(FolloweeListRequest flr);

}
