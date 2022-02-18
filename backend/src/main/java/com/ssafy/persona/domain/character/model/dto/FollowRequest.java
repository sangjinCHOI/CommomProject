package com.ssafy.persona.domain.character.model.dto;

import com.ssafy.persona.domain.character.model.Entity.Follow;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class FollowRequest {
	private int follower;
	private int followee;
	
	public Follow toFollow() {
		return Follow.builder()
				.follower(follower)
				.followee(followee)
				.build();
	}
	
}
