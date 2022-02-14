package com.ssafy.persona.domain.file.model.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class FileReadDTO {
	private String relationTb;
	private int relationSeq;
	
	public FileReadDTO(String relationTb, int relationSeq) {
		this.relationTb = relationTb;
		this.relationSeq = relationSeq;
	}
}
