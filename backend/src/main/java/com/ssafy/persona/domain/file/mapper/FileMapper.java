package com.ssafy.persona.domain.file.mapper;

import com.ssafy.persona.domain.file.model.dto.FileReadDTO;
import com.ssafy.persona.domain.file.model.dto.FileUploadDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FileMapper {
	int uploadFile(FileUploadDTO file);
	int modifyFile(FileReadDTO file);
	List<String> readFile(FileReadDTO request);
}
