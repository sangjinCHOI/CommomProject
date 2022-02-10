package com.ssafy.persona.user.model.dto;

import java.time.LocalDateTime;

import com.ssafy.persona.user.model.entity.User;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UserInfoResponse {
	private int userSeq;
	private String userId;
	private String userPw;
	private String userEmail;
	private boolean emailIsAuth;
	private String userBirth;
	private boolean userIsActive;
	private LocalDateTime userCreatedDate;
	private LocalDateTime userModifiedDate;
	
	public UserInfoResponse(User user) {
		this.userSeq = user.getUserSeq();
		this.userId = user.getUserId();
		this.userPw = user.getUserPw();
		this.userEmail = user.getUserEmail();
		this.emailIsAuth = user.isEmailIsAuth();
		this.userBirth = user.getUserBirth();
		this.userIsActive = user.isUserIsActive();
		this.userCreatedDate = user.getUserCreatedDate();
		this.userModifiedDate = user.getUserModifiedDate();
	}
}
