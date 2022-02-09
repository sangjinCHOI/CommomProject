package com.ssafy.persona.storage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.storage.model.dto.ContentStoreListResponse;
import com.ssafy.persona.storage.model.dto.ContentStoreRequest;
import com.ssafy.persona.storage.model.dto.StorageContentListRequest;
import com.ssafy.persona.storage.model.dto.StorageCreateRequest;
import com.ssafy.persona.storage.model.dto.StorageListResponse;
import com.ssafy.persona.storage.model.dto.StorageModifyRequest;
import com.ssafy.persona.storage.service.StorageService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@Api("storage controller API")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
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
	public ResponseEntity<String> storageDelete(@RequestParam @ApiParam(value = "저장소 삭제 정보.", required = true) int storageSeq) {
		if (storageService.storageDelete(storageSeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "storage list", notes = "저장소 리스트", response = List.class)
	@GetMapping("/storage/{characterSeq}")
	public ResponseEntity<List<StorageListResponse>> storageList(@PathVariable("characterSeq") @ApiParam(value = "저장소 리스트를 조회할 캐릭터번호.", required = true) int characterSeq) {
		return new ResponseEntity<List<StorageListResponse>>(storageService.storageList(characterSeq), HttpStatus.OK);
	}
	
	@ApiOperation(value = "content store", notes = "게시글 저장, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content/store")
	public ResponseEntity<String> contentStore(@RequestBody @ApiParam(value = "게시글 저장.", required = true) ContentStoreRequest contentStoreRequest) {
		int contentSeq = contentStoreRequest.getContentSeq();
		
		storageService.contentStoreUpdate(contentSeq);
		
		if (storageService.contentStore(contentStoreRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "content unstore", notes = "게시글 저장 취소, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/content/unstore")
	public ResponseEntity<String> contentUnstore(@RequestParam @ApiParam(value = "캐릭터 번호.", required = true) int characterSeq, @RequestParam @ApiParam(value = "게시글 번호.", required = true) int contentSeq) {
		storageService.contentUnstoreUpdate(contentSeq);
		
		if (storageService.contentUnstore(characterSeq, contentSeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "content store list", notes = "게시글 저장 누른 유저 리스트", response = List.class)
	@GetMapping("/content/store/{contentSeq}")
	public ResponseEntity<List<ContentStoreListResponse>> contentStoreList(@PathVariable("contentSeq") @ApiParam(value = "리스트를 조회할 게시글번호.", required = true) int contentSeq) {
		return new ResponseEntity<List<ContentStoreListResponse>>(storageService.contentStoreList(contentSeq), HttpStatus.OK);
	}
	
	@ApiOperation(value = "storage content list", notes = "특정 저장소의 게시물 리스트 조회", response = ContentGetResponse.class)
	@PostMapping("/storage/contents")
	public ResponseEntity<List<ContentGetResponse>> storageContentList(@RequestBody @ApiParam(value = "특정 저장소를 조회할 정보.", required = true) StorageContentListRequest storageContentListRequest) {
		return new ResponseEntity<List<ContentGetResponse>>(storageService.storageContentList(storageContentListRequest), HttpStatus.OK);
	}
	
	
	

}
