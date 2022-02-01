package com.ssafy.persona.file.model.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class FileModifyDTO {
	private String relationTb;
	private int relationSeq;
	
	public FileModifyDTO(String relationTb, int relationSeq) {
		this.relationTb = relationTb;
		this.relationSeq = relationSeq;
	}
}
