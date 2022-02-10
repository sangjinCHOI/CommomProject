package com.ssafy.persona.user.model.dto;

import com.ssafy.persona.user.model.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class UserSignupRequest {
	private String userId;
	private String userPw;
	private String userEmail;
	
	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}
	
	public User toUser() {
		return (User.builder()
					.userId(userId)
					.userPw(userPw)
					.userEmail(userEmail).build());
		

	}
}
