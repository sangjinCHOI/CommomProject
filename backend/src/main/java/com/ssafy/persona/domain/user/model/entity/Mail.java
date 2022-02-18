package com.ssafy.persona.domain.user.model.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class Mail {
	@Id
	private int mailSeq;
	@Column
	private int userSeq;
	@Column	
	private char mailType;
	@Column
	private String mailText;
	@Column
	private LocalDateTime mailSendDate;
	@Column
	private String userEmail;
}
