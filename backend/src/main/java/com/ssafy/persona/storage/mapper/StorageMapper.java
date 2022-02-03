package com.ssafy.persona.storage.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.storage.model.dto.StorageCreateRequest;
import com.ssafy.persona.storage.model.dto.StorageDeleteRequest;
import com.ssafy.persona.storage.model.dto.StorageListResponse;
import com.ssafy.persona.storage.model.dto.StorageModifyRequest;

@Mapper
public interface StorageMapper {

	int storageCreate(StorageCreateRequest storageCreateRequest);
	int storageModify(StorageModifyRequest storageModifyRequest);
	int storageDelete(StorageDeleteRequest storageDeleteRequest);
	List<StorageListResponse> storageList(int characterSeq);

}
