package com.ssafy.persona.content.model.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

@Getter
@AllArgsConstructor
@Builder
@ToString
public class ContentModifyRequest {
	@NonNull
	private int contentSeq;
	private String contentText;
	private boolean contentIsPublic;
	private boolean contentIsMedia;
	private LocalDateTime contentModifiedDate;
}