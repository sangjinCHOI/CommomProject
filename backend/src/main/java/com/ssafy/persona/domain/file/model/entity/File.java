package com.ssafy.persona.domain.file.model.entity;

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
public class File {
	@Id
	private int fileSeq;
	@Column
	private String fileName;
	@Column
	private Long fileSize;
	@Column
	private String filePath;
	@Column
	private char fileType;
	@Column
	private String relationTb;
	@Column
	private int relationSeq;
	@Column
	private LocalDateTime fileRegisteredDate;
	@Column
	private LocalDateTime fileModifiedDate;
}
