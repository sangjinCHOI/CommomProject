package com.ssafy.persona.storage.service;

import java.util.List;

import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.storage.model.dto.ContentStoreListResponse;
import com.ssafy.persona.storage.model.dto.ContentStoreRequest;
import com.ssafy.persona.storage.model.dto.StorageContentListRequest;
import com.ssafy.persona.storage.model.dto.StorageCreateRequest;
import com.ssafy.persona.storage.model.dto.StorageListResponse;
import com.ssafy.persona.storage.model.dto.StorageModifyRequest;

public interface StorageService {
	boolean storageCreate(StorageCreateRequest storageCreateRequest);
	boolean storageModify(StorageModifyRequest storageModifyRequest);
	boolean storageDelete(int storageSeq);
	
	List<StorageListResponse> storageList(int characterSeq);
	
	boolean contentStore(ContentStoreRequest contentStoreRequest);
	void contentStoreUpdate(int contentSeq);
	
	boolean contentUnstore(int characterSeq, int contentSeq);
	void contentUnstoreUpdate(int contentSeq);
	
	List<ContentStoreListResponse> contentStoreList(int contentSeq);
	List<ContentGetResponse> storageContentList(StorageContentListRequest storageContentListRequeset);
}
