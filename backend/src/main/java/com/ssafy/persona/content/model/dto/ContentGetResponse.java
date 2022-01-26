package com.ssafy.persona.content.model.dto;

import java.time.LocalDateTime;

import com.ssafy.persona.content.model.entity.Content;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class ContentGetResponse {
	private int contentSeq;
	private boolean contentIsActive;
	private boolean contentIsPublic;
	private int characterSeq;
	private int categorySeq;
	private String contentText;
	private int contentLike;
	private int contentSave;
	private boolean contentIsMedia;
	private LocalDateTime contentCreatedDate;
	private LocalDateTime contentModifiedDate;
	
	public ContentGetResponse(Content content) {
		super();
		this.contentSeq = content.getContentSeq();
		this.contentIsActive = content.isContentIsActive();
		this.contentIsPublic = content.isContentIsPublic();
		this.characterSeq = content.getCharacterSeq();
		this.categorySeq = content.getCategorySeq();
		this.contentText = content.getContentText();
		this.contentLike = content.getContentLike();
		this.contentSave = content.getContentSave();
		this.contentIsMedia = content.isContentIsMedia();
		this.contentCreatedDate = content.getContentCreatedDate();
		this.contentModifiedDate = content.getContentModifiedDate();	
	}
}
