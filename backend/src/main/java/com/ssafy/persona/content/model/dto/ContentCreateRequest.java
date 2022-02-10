package com.ssafy.persona.content.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentCreateRequest {
	private int contentSeq;
	private MultipartFile[] myfile;
	private int characterSeq;
	private int categoryNumber;
	private String contentText;
	private boolean contentIsPublic;
	private boolean contentIsMedia;

	public void setContentSeq(int contentSeq) {
		this.contentSeq = contentSeq;
	}
}
