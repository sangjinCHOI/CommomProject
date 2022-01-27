package com.ssafy.persona.user.model.dto;

import com.ssafy.persona.user.model.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class UpdateCountRequest {

	private int userSeq;
	private int userCreatableCount;
	
	public User toUser() {
		return User.builder()
				.userSeq(userSeq)
				.userCreatableCount(userCreatableCount)
				.build();
	}
}
