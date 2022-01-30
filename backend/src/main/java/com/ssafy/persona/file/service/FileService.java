package com.ssafy.persona.file.service;

import com.ssafy.persona.file.model.dto.FileUploadDTO;

public interface FileService {
	int uploadFile(FileUploadDTO file);
}
