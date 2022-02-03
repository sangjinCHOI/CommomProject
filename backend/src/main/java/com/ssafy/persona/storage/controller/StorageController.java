package com.ssafy.persona.storage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.storage.model.dto.StorageCreateRequest;
import com.ssafy.persona.storage.model.dto.StorageDeleteRequest;
import com.ssafy.persona.storage.model.dto.StorageModifyRequest;
import com.ssafy.persona.storage.service.StorageService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@Api("storage controller API")
public class StorageController {
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	StorageService storageService;
	
	@ApiOperation(value = "storage create", notes = "storage 생성, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/storage")
	public ResponseEntity<String> storageCreate(@RequestBody @ApiParam(value = "저장소 정보.", required = true) StorageCreateRequest storageCreateRequest) {
		if (storageService.storageCreate(storageCreateRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "storage modify", notes = "storage 수정, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("/storage")
	public ResponseEntity<String> storageModify(@RequestBody @ApiParam(value = "저장소 수정 정보.", required = true) StorageModifyRequest storageModifyRequest) {
		if (storageService.storageModify(storageModifyRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value = "storage delete", notes = "storage 삭제, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/storage")
	public ResponseEntity<String> storageDelete(@RequestBody @ApiParam(value = "저장소 삭제 정보.", required = true) StorageDeleteRequest storageDeleteRequest) {
		if (storageService.storageDelete(storageDeleteRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	

}
