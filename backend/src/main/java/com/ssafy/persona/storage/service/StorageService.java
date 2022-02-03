package com.ssafy.persona.storage.service;

import com.ssafy.persona.storage.model.dto.StorageCreateRequest;
import com.ssafy.persona.storage.model.dto.StorageModifyRequest;

public interface StorageService {
	boolean storageCreate(StorageCreateRequest storageCreateRequest);
	boolean storageModify(StorageModifyRequest storageModifyRequest);
}
