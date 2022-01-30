package com.ssafy.persona.file.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class FileUploadRequest {
	private MultipartFile[] myfile;
	private char fileType;
	private String relationTb;
	
	FileUploadRequest(MultipartFile[] files, char fileType, String relationTb){
		this.myfile=files;
		this.fileType=fileType;
		this.relationTb=relationTb;
	}
}
