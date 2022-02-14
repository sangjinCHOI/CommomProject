package com.ssafy.persona.domain.user.model.dto;

import com.ssafy.persona.domain.user.model.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class UserLoginRequest {
	@NonNull
	private String userId;
	@NonNull
	private String userPw;
	
	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}
	public User toUser() {
		return (User.builder()
					.userId(userId)
					.userPw(userPw).build());
	}
}
