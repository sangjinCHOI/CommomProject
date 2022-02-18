package com.ssafy.persona.domain.content.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class SendContentCreateRequest {
	private int characterSeq;
	private int categoryNumber;
	private String contentText;
	private boolean contentIsPublic;
	private boolean contentIsMedia;
}
