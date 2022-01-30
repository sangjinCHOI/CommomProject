package com.ssafy.persona.file.controller;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.persona.file.model.dto.FileUploadDTO;
import com.ssafy.persona.file.model.dto.FileUploadRequest;
import com.ssafy.persona.file.service.FileService;

@RestController
@RequestMapping("/file")
public class FileController {
	
	@Autowired
	FileService fileService;
	
	public void makeFolder(String path) {
		File Folder = new File(path);
		
		if(!Folder.exists()) {
			try {
				Folder.mkdir();
			}
			catch(Exception e) {
				e.getStackTrace();
			}
		}
	}
	
	@PostMapping("/upload")
	public ResponseEntity makeTest(FileUploadRequest request) throws IllegalStateException, IOException {
		
		LocalDate now = LocalDate.now();
		 
		// 폴더 명 지정 필요 + 폴더가 없다면 만들기
		String path = "C:\\Users\\multicampus\\Desktop\\tmp\\" + now.getYear();
		makeFolder(path);
		path += "\\" + now.getMonthValue();
		makeFolder(path);
		path += "\\" + now.getDayOfMonth();
		makeFolder(path);
		path += "\\";

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
						request.getRelationTb());
				
				fileService.uploadFile(dto);
			}
		}
		return (new ResponseEntity(HttpStatus.OK));
	}
	
	
//	@PostMapping("/upload")
//	public ResponseEntity makeTest(MultipartFile[] myfile) throws IllegalStateException, IOException {
//		
//		LocalDate now = LocalDate.now();
//		
//		// 폴더 명 지정 필요 + 폴더가 없다면 만들기
//		String path = "C:\\Users\\multicampus\\Desktop\\tmp\\" + now.getYear();
//		makeFolder(path);
//		path += "\\" + now.getMonthValue();
//		makeFolder(path);
//		path += "\\" + now.getDayOfMonth();
//		makeFolder(path);
//		path += "\\";
//		
//		for (MultipartFile files: myfile) {
//			
//			UUID uuid = UUID.randomUUID();		
//			String saveName = path+uuid.toString()+"_"+files.getOriginalFilename();
//			
//			// path : 저장 경로
//			// uuid.toString+"_"+myfile.getOriginalFilename() : 파일 이름
//			
//			if(!files.isEmpty()) {
//				files.transferTo(new File(saveName));
//				//db에 저장하는 작업 필요함
//				
//				FileUploadDTO dto = new FileUploadDTO(
//						files.getOriginalFilename(),
//						path,
//						files.getSize());
//				
//				fileService.uploadFile(dto);
//			}
//		}
//		return (new ResponseEntity(HttpStatus.OK));
//	}

}
