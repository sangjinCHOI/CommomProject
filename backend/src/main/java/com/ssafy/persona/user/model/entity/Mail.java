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
public class Mail {
	@Id
	private int mailSeq;
	@Column
	private int userSeq;
	@Column	
	private char mailType;
	@Column
	private String userText;
	@Column
	private LocalDateTime mailSendDate;
}
