package com.ssafy.persona.storage.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.storage.model.dto.StorageCreateRequest;

@Mapper
public interface StorageMapper {

	int storageCreate(StorageCreateRequest storageCreateRequest);

}
