package com.ssafy.persona.domain.user.model.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@ToString
public class AuthNumber {
	@Id
	private int authSeq;
	@Column
	private int userSeq;
	@Column
	private String authText;
	@Column
	private LocalDateTime authCreatedDate;
}
