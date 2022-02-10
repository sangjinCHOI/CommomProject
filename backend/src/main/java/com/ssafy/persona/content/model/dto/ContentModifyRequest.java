package com.ssafy.persona.content.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ContentModifyRequest {
	private int contentSeq;
	private MultipartFile[] myfile;
	private String contentText;
	private boolean contentIsPublic;
	private boolean contentIsMedia;
}