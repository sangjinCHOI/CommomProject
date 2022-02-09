package com.ssafy.persona.file.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.file.model.dto.FileReadDTO;
import com.ssafy.persona.file.model.dto.FileUploadDTO;
import java.util.List;

@Mapper
public interface FileMapper {
	int uploadFile(FileUploadDTO file);
	int modifyFile(FileReadDTO file);
	List<String> readFile(FileReadDTO request);
}
