package com.ssafy.persona.domain.content.model.dto;

import java.time.LocalDateTime;

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
	private int categoryNumber;
	private String contentText;
	private int contentLike;
	private int contentSave;
	private boolean contentIsMedia;
	private LocalDateTime contentCreatedDate;
	private LocalDateTime contentModifiedDate;
	private int contentIsLike;
	private int contentIsStore;
	private int replyCount;
	private String contentWriter;
	private String writerProfile;
	private int tagCount;
	private String tags;
	private int fileCount;
	private String contentFilePath;
	private String contentFileName;
}
