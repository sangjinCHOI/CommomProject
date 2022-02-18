package com.ssafy.persona.domain.user.model.dto;

import com.ssafy.persona.domain.user.model.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
@Builder
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
