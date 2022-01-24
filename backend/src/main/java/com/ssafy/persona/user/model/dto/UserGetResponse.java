package com.ssafy.persona.user.model.dto;

import com.ssafy.persona.user.model.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class UserGetResponse {
	private int userSeq;
	private String userId;
	private String userEmail;
	private String userBirth;
	
	public UserGetResponse(User user) {
		this.userSeq = user.getUserSeq();
		this.userId =  user.getUserId();
		this.userEmail = user.getUserEmail();
		this.userBirth = user.getUserBirth();
	}
}
