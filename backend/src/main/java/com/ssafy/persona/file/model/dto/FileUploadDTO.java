package com.ssafy.persona.file.model.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class FileUploadDTO {
	private String fileName;
	private String filePath;
	private long fileSize;
	private char fileType;
	private String relationTb;
	
	public FileUploadDTO(String fileName, String filePath, long fileSize, char fileType, String relationTb) {
		this.fileName = fileName;
		this.filePath = filePath;
		this.fileSize = fileSize;
		this.fileType = fileType;
		this.relationTb = relationTb;
	}
}
