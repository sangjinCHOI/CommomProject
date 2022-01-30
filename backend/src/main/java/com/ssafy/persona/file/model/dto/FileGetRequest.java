package com.ssafy.persona.file.model.dto;

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
public class FileGetRequest {
	private int fileName;
	private int fileSize;
	private int filePath;
	private int fileType;
}
