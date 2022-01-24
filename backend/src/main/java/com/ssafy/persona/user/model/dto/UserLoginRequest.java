package com.ssafy.persona.user.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

@Getter
@AllArgsConstructor
@Builder
@ToString
public class UserLoginRequest {
	@NonNull
	private String userId;
	@NonNull
	private String userPw;
	
}
