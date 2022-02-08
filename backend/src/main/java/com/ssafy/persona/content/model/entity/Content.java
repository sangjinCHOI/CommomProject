package com.ssafy.persona.content.model.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class Content {
	@Id
	private int contentSeq;
	@Column
	private int characterSeq;
	@Column
	private int categorySeq;
	@Column
	private String contentText;
	@Column
	private int contentLike;
	@Column
	private int contentSave;
	@Column
	private boolean contentIsPublic;
	@Column
	private boolean contentIsMedia;
	@Column
	private boolean contentIsActive;
	@Column
	private boolean contentIsReport;
	@Column
	private LocalDateTime contentCreatedDate;
	@Column
	private LocalDateTime contentModifiedDate;
	@Column
	private int contentIsLike;
	@Column
	private int contentIsStore;
	
}
