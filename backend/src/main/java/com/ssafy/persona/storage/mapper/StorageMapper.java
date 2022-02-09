package com.ssafy.persona.storage.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.storage.model.dto.ContentStoreListResponse;
import com.ssafy.persona.storage.model.dto.ContentStoreRequest;
import com.ssafy.persona.storage.model.dto.StorageContentListRequest;
import com.ssafy.persona.storage.model.dto.StorageCreateRequest;
import com.ssafy.persona.storage.model.dto.StorageListResponse;
import com.ssafy.persona.storage.model.dto.StorageModifyRequest;

@Mapper
public interface StorageMapper {
	int storageCreate(StorageCreateRequest storageCreateRequest);
	int storageModify(StorageModifyRequest storageModifyRequest);
	int storageDelete(int storageSeq);
	
	List<StorageListResponse> storageList(int characterSeq);
	
	int contentStore(ContentStoreRequest contentStoreRequest);
	void contentStoreUpdate(int contentSeq);
	
	int contentUnstore(int characterSeq, int contentSeq);
	void contentUnstoreUpdate(int contentSeq);
	
	List<ContentStoreListResponse> contentStoreList(int contentSeq);
	List<ContentGetResponse> storageContentList(StorageContentListRequest storageContentListRequeset);
}
