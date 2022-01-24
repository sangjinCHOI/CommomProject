package com.ssafy.persona.user.model.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class UserResponse {
	private int userSeq;
	private String userId;
	private String userPw;
	private String userEmail;
	private boolean emailIsAuth;
	private String userBirth;
	private boolean userIsActive;
	private LocalDateTime userCreatedDate;
	private LocalDateTime userModifiedDate;
	
}
