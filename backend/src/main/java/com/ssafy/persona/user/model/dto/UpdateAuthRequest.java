package com.ssafy.persona.user.model.dto;

import com.ssafy.persona.user.model.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class UpdateAuthRequest {
	private String userId;
	private String userEmail;
	
	public User toUser(String userPw) {
		return (User.builder()
				.userId(userId)
				.userPw(userPw)
				.userEmail(userEmail).build());
	}
}
