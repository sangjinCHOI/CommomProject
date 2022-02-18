package com.ssafy.persona.domain.file.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class FileModifyRequest {
	private int fileSeq;
	private MultipartFile[] myfile;
	private char fileType;
	private String relationTb;
	private int relationSeq;
	
	FileModifyRequest(int fileSeq, MultipartFile[] files, char fileType, String relationTb, int relationSeq){
		this.fileSeq = fileSeq;
		this.myfile=files;
		this.fileType=fileType;
		this.relationTb=relationTb;
		this.relationSeq = relationSeq;
	}
}
