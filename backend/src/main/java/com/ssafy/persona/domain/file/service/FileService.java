package com.ssafy.persona.domain.file.service;

import java.io.IOException;
import java.util.List;

import com.ssafy.persona.domain.file.model.dto.FileReadDTO;
import com.ssafy.persona.domain.file.model.dto.FileUploadRequest;

public interface FileService {
	int uploadFile(FileUploadRequest request)throws IllegalStateException, IOException;
	int modifyFile(FileUploadRequest request)throws IllegalStateException, IOException;
	List<String> readFile(FileReadDTO request);
}
