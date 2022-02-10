package com.ssafy.persona.character.service;

import java.util.List;

import com.ssafy.persona.character.model.dto.FollowRequest;
import com.ssafy.persona.character.model.dto.FolloweeListRequest;
import com.ssafy.persona.character.model.dto.FollowerListRequest;
import com.ssafy.persona.character.model.dto.FollowerListResponse;

public interface FollowService {
	int follow(FollowRequest request);

	int unFollow(FollowRequest request);

	List<FollowerListResponse> getFollowerList(FollowerListRequest request);

	List<Integer> getFolloweeList(FolloweeListRequest request);

}
