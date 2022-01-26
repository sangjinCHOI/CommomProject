package com.ssafy.persona.character.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.character.model.dto.FollowRequest;
import com.ssafy.persona.character.model.dto.FolloweeListRequest;
import com.ssafy.persona.character.model.dto.FollowerListRequest;
import com.ssafy.persona.character.model.dto.FollowerListResponse;

@Mapper
public interface FollowMapper {

	int follow(FollowRequest fr);

	int unFollow(FollowRequest fr);

	List<FollowerListResponse> getFollowerList(FollowerListRequest flr);

	List<Integer> getFolloweeList(FolloweeListRequest flr);
}
