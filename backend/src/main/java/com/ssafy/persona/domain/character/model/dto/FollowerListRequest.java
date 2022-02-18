package com.ssafy.persona.domain.character.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
public class FollowerListRequest {
	private int followee;
	private String nickname;
	
}