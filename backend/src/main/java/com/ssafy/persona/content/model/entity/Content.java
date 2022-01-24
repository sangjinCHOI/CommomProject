package com.ssafy.persona.content.model.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor

public class Content {
	private int contentSeq;
	private int characterSeq;
	private int scategorySeq;
	private String contentText;
	private int contentLike;
	private int contentSave;
	private boolean contentIsPublic;
	private boolean contentIsMedia;
	private boolean contentIsActive;
	private boolean contentIsReport;
	private LocalDateTime contentCreatedDate;
	private LocalDateTime contentModifiedDate;
}
