package com.ssafy.persona.file.model.entity;

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
public class File {
	private int fileSeq;
	private String fileName;
	private Long fileSize;
	private String filePath;
	private char fileType;
	private String relationTb;
	private int relationSeq;
	private LocalDateTime fileRegisteredDate;
	private LocalDateTime fileModifiedDate;
}
