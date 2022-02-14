package com.ssafy.persona.domain.user.model.dto;

import com.ssafy.persona.domain.user.model.entity.User;
import org.springframework.format.annotation.DateTimeFormat;

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
