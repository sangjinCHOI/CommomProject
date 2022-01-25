package com.ssafy.persona.content.model.dto;

import java.time.LocalDateTime;

import com.ssafy.persona.content.model.entity.Content;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentModifyRequest {
	private int contentSeq;
	private String contentText;
	private boolean contentIsPublic;
	private boolean contentIsMedia;
	private LocalDateTime contentModifiedDate;
	
	public Content toContent() {
		return Content.builder()
					  .contentSeq(contentSeq)
					  .contentText(contentText)
					  .contentIsPublic(contentIsPublic)
					  .contentIsMedia(contentIsMedia)
					  .contentModifiedDate(contentModifiedDate)
					  .build();
	}	
}