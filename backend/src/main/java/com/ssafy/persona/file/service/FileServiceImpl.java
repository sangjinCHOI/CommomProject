package com.ssafy.persona.file.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.file.mapper.FileMapper;
import com.ssafy.persona.file.model.dto.FileUploadDTO;

@Service
public class FileServiceImpl implements FileService{

	@Autowired
	FileMapper fileMapper;
	
	@Override
	public int uploadFile(FileUploadDTO file) {
		// 찾고 중복안되는지 확인하는 작업 필요
		
		return fileMapper.uploadFile(file);
	}

}
