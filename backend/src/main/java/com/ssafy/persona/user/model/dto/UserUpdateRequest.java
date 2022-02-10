package com.ssafy.persona.user.model.dto;

import org.springframework.format.annotation.DateTimeFormat;

import com.ssafy.persona.user.model.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class UserUpdateRequest {
	private String userId;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private String userBirth;
	private String userPw;
	
	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}
	
	public User toUser() {
		return (User.builder()
					.userId(userId)
					.userBirth(userBirth)
					.userPw(userPw).build());
	}
}
