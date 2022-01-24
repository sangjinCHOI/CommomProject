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
public class ContentCreateRequest {
	@NonNull
	private int characterSeq;
	@NonNull
	private int categorySeq;
	@NonNull
	private String contentText;
	@NonNull
	private boolean contentIsPublic;
	@NonNull
	private boolean contentIsMedia;
	
	private LocalDateTime contentCreatedDate;
}