package com.ssafy.persona.file.model.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

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
