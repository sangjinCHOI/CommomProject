package com.ssafy.persona.user.model.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
public class User {
	@Id
	private int userSeq;
	@Column
	private String userId;
	@Column
	private String userPw;
	@Column
	private String userEmail;
	@Column
	private boolean emailIsAuth;
	@Column
	private String userBirth;
	@Column
	private boolean userIsActive;
	@Column
	private LocalDateTime userCreatedDate;
	@Column
	private LocalDateTime userModifiedDate;
	
}
