package com.ssafy.persona.domain.character.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
public class FolloweeListRequest {
	private int follower;
	private String nickname;
	
}
