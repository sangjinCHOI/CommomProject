package com.ssafy.persona.storage.service;

import com.ssafy.persona.storage.model.dto.StorageCreateRequest;

public interface StorageService {
	boolean storageCreate(StorageCreateRequest storageCreateRequest);
}
