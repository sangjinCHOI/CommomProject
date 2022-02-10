package com.ssafy.persona.storage.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class StorageModifyRequest {
	private int storageSeq;
	private String storageName;
	private boolean storagePublic;
	private MultipartFile[] myfile;
	
}
