package com.ssafy.persona.file.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.persona.file.mapper.FileMapper;
import com.ssafy.persona.file.model.dto.FileReadDTO;
import com.ssafy.persona.file.model.dto.FileUploadDTO;
import com.ssafy.persona.file.model.dto.FileUploadRequest;

@Service
public class FileServiceImpl implements FileService{

	@Autowired
	FileMapper fileMapper;
	
	public String makeFolder() {
		
		LocalDate now = LocalDate.now();
		 
		// 폴더 명 지정 필요 + 폴더가 없다면 만들기
		String path = "\\home\\ubuntu\\files\\" + now.getYear() + "\\" + now.getMonthValue() + "\\" + now.getDayOfMonth() + "\\";
		
		File Folder = new File(path);
		
		if(!Folder.exists()) {
			try {
				Folder.mkdirs();
			}
			catch(Exception e) {
				e.getStackTrace();
			}
		}
		return (path);
	}
	
	// return (1): 성공
	// return (0): 실패
	@Override
	public int uploadFile(FileUploadRequest request) throws IllegalStateException, IOException {
		
		String path = makeFolder();

		for (MultipartFile files: request.getMyfile()) {
			
			UUID uuid = UUID.randomUUID();		
			String saveName = path+uuid.toString()+"_"+files.getOriginalFilename();
			
			// path : 저장 경로
			// uuid.toString+"_"+myfile.getOriginalFilename() : 파일 이름
			
			if(!files.isEmpty()) {
				files.transferTo(new File(saveName));
				//db에 저장하는 작업 필요함
				
				FileUploadDTO dto = new FileUploadDTO(
						files.getOriginalFilename(),
						path,
						files.getSize(),
						request.getFileType(),
						request.getRelationTb(),
						request.getRelationSeq());
				
				if (fileMapper.uploadFile(dto) < 1) return (0);
			}
		}
		
		return (1);
	}

	// return (1): 성공
	// return (0): 실패
	@Override
	public int modifyFile(FileUploadRequest request) throws IllegalStateException, IOException {
		
		fileMapper.modifyFile(new FileReadDTO(request.getRelationTb(), request.getRelationSeq()));
		
		String path = makeFolder();

		for (MultipartFile files: request.getMyfile()) {
			
			UUID uuid = UUID.randomUUID();		
			String saveName = path+uuid.toString()+"_"+files.getOriginalFilename();
			
			// path : 저장 경로
			// uuid.toString+"_"+myfile.getOriginalFilename() : 파일 이름
			
			if(!files.isEmpty()) {
				files.transferTo(new File(saveName));
				//db에 저장하는 작업 필요함
				
				FileUploadDTO dto = new FileUploadDTO(
						files.getOriginalFilename(),
						path,
						files.getSize(),
						request.getFileType(),
						request.getRelationTb(),
						request.getRelationSeq());
				
				if (fileMapper.uploadFile(dto) < 1) return (0);
			}
		}
		
		return (1);
	}

	@Override
	public List<String> readFile(FileReadDTO request) {
		
		return fileMapper.readFile(request);
	}

}
