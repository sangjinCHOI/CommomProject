package com.ssafy.persona.storage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.storage.mapper.StorageMapper;
import com.ssafy.persona.storage.model.dto.StorageCreateRequest;

@Service
public class StorageServiceImpl implements StorageService {
	@Autowired
	StorageMapper storageMapper;
	
	@Override
	public boolean storageCreate(StorageCreateRequest storageCreateRequest) {
		return storageMapper.storageCreate(storageCreateRequest) == 1;
	}

}
