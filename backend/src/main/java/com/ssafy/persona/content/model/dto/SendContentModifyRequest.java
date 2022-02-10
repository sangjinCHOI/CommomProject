package com.ssafy.persona.content.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class SendContentModifyRequest {
	private int contentSeq;
	private String contentText;
	private boolean contentIsPublic;
	private boolean contentIsMedia;
}
