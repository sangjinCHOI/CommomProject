package com.ssafy.persona.domain.character.mapper;

import java.util.List;

import com.ssafy.persona.domain.character.model.dto.FollowRequest;
import com.ssafy.persona.domain.character.model.dto.FolloweeListRequest;
import com.ssafy.persona.domain.character.model.dto.FollowerListRequest;
import com.ssafy.persona.domain.character.model.dto.FollowerListResponse;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FollowMapper {

	int followCheck(FollowRequest request);
	
	int follow(FollowRequest request);

	int unFollow(FollowRequest request);

	List<FollowerListResponse> getFollowerList(FollowerListRequest request);

	List<Integer> getFolloweeList(FolloweeListRequest request);

}
