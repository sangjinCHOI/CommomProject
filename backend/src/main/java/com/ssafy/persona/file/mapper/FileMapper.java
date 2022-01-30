package com.ssafy.persona.file.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.file.model.dto.FileUploadDTO;

@Mapper
public interface FileMapper {
	int uploadFile(FileUploadDTO file);
}
