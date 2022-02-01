package com.ssafy.persona.file.service;

import java.io.IOException;

import com.ssafy.persona.file.model.dto.FileUploadRequest;

public interface FileService {
	int uploadFile(FileUploadRequest request)throws IllegalStateException, IOException;
}
