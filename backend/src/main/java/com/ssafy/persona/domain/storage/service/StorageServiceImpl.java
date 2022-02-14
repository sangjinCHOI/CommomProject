package com.ssafy.persona.domain.storage.service;

import java.io.IOException;
import java.util.List;

import com.ssafy.persona.domain.storage.mapper.StorageMapper;
import com.ssafy.persona.domain.storage.model.dto.ContentStoreListResponse;
import com.ssafy.persona.domain.storage.model.dto.ContentStoreRequest;
import com.ssafy.persona.domain.storage.model.dto.StorageContentListRequest;
import com.ssafy.persona.domain.storage.model.dto.StorageCreateRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.persona.domain.content.model.dto.ContentGetResponse;
import com.ssafy.persona.domain.file.model.dto.FileUploadRequest;
import com.ssafy.persona.domain.file.service.FileServiceImpl;
import com.ssafy.persona.domain.storage.model.dto.StorageListResponse;
import com.ssafy.persona.domain.storage.model.dto.StorageModifyRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StorageServiceImpl implements StorageService {
	@Autowired
	StorageMapper storageMapper;
	
	private final FileServiceImpl fileService;
	
	@Transactional
	@Override
	public int storageCreate(StorageCreateRequest storageCreateRequest) {
		int result = 0;
		result = storageMapper.storageCreate(storageCreateRequest);
		if (storageCreateRequest.getMyfile() != null) {
			FileUploadRequest file = FileUploadRequest.builder()
					.myfile(storageCreateRequest.getMyfile())
					.fileType('2')
					.relationTb("tb_storage")
					.relationSeq(storageCreateRequest.getStorageSeq())
					.build();
			try {
				fileService.uploadFile(file);
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		return result;
	}

	@Transactional
	@Override
	public boolean storageModify(StorageModifyRequest storageModifyRequest) {
		if (storageModifyRequest.getMyfile() != null) {
			FileUploadRequest file = FileUploadRequest.builder()
					.myfile(storageModifyRequest.getMyfile())
					.fileType('2')
					.relationTb("tb_storage")
					.relationSeq(storageModifyRequest.getStorageSeq())
					.build();
			try {
				fileService.modifyFile(file);
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		return storageMapper.storageModify(storageModifyRequest) == 1;
	}

	@Override
	public boolean storageDelete(int storageSeq) {
		return storageMapper.storageDelete(storageSeq) == 1;
	}

	@Override
	public List<StorageListResponse> storageList(int characterSeq) {
		return storageMapper.storageList(characterSeq);
	}

	@Override
	public boolean contentStore(ContentStoreRequest contentStoreRequest) {
		return storageMapper.contentStore(contentStoreRequest) == 1;
	}

	@Override
	public void contentStoreUpdate(int contentSeq) {
		storageMapper.contentStoreUpdate(contentSeq);
		
	}

	@Override
	public boolean contentUnstore(int characterSeq, int contentSeq) {
		return storageMapper.contentUnstore(characterSeq, contentSeq) == 1;
	}

	@Override
	public void contentUnstoreUpdate(int contentSeq) {
		storageMapper.contentUnstoreUpdate(contentSeq);
	}

	@Override
	public List<ContentStoreListResponse> contentStoreList(int contentSeq) {
		return storageMapper.contentStoreList(contentSeq);
	}

	@Override
	public List<ContentGetResponse> storageContentList(StorageContentListRequest storageContentListRequeset) {
		return storageMapper.storageContentList(storageContentListRequeset);
	}

}
