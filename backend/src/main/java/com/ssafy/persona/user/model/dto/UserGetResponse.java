package com.ssafy.persona.user.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.persona.user.model.entity.User;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UserGetResponse {
	@JsonProperty("user_seq")
	private int userSeq;
	@JsonProperty("user_id")
	private String userId;
	@JsonProperty("user_email")
	private String userEmail;
	@JsonProperty("user_birth")
	private String userBirth;
	
	public UserGetResponse(User user) {
		this.userSeq = user.getUserSeq();
		this.userId =  user.getUserId();
		this.userEmail = user.getUserEmail();
		this.userBirth = user.getUserBirth();
	}
}
