package com.ssafy.persona.domain.storage.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class StorageCreateRequest {
	private int storageSeq;
	private MultipartFile[] myfile;
	private int characterSeq;
	private String storageName;
	private boolean storagePublic;
	
	public void setStorageSeq(int storageSeq) {
		this.storageSeq = storageSeq;
	}

}
