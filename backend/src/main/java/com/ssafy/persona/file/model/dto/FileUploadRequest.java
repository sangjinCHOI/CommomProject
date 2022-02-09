package com.ssafy.persona.file.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Builder
public class FileUploadRequest {
	private MultipartFile[] myfile;
	private char fileType;
	private String relationTb;
	private int relationSeq;
	
	FileUploadRequest(MultipartFile[] files, char fileType, String relationTb, int relationSeq){
		this.myfile=files;
		this.fileType=fileType;
		this.relationTb=relationTb;
		this.relationSeq = relationSeq;
	}
}
