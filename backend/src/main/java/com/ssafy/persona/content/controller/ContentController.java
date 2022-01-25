package com.ssafy.persona.content.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;
import com.ssafy.persona.content.service.ContentService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@Api("content controller API")
public class ContentController {
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	ContentService contentService;
	
	@ApiOperation(value = "content create", notes = "content 작성, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content")
	public ResponseEntity<String> contentCreate(@RequestBody @ApiParam(value = "게시글 정보.", required = true) ContentCreateRequest contentCreateRequest) {
		if (contentService.contentCreate(contentCreateRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	@ApiOperation(value = "content modify", notes = "content 수정, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("/content")
	public ResponseEntity<String> contentModify(@RequestBody @ApiParam(value = "수정할 글정보.", required = true) ContentModifyRequest contentModifyRequest) {
		if (contentService.contentModify(contentModifyRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.OK);
	}
	@ApiOperation(value = "content delete", notes = "content 삭제, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/content/{contentSeq}")
	public ResponseEntity<String> contentDelete(@PathVariable("contentSeq") @ApiParam(value = "삭제할 글의 글번호.", required = true) int contentSeq) {
		if (contentService.contentDelete(contentSeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	@ApiOperation(value = "reply create", notes = "reply 작성, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content/reply")
	public ResponseEntity<String> replyContent(@RequestBody @ApiParam(value = "댓글 정보.", required = true) ReplyCreateRequest replyCreateRequest) {
		if (contentService.replyCreate(replyCreateRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	@ApiOperation(value = "reply modify", notes = "reply 수정, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("/content/reply")
	public ResponseEntity<String> replyModify(@RequestBody @ApiParam(value = "수정할 댓글 정보.", required = true) ReplyModifyRequest replyModifyRequest) {
		if (contentService.replyModify(replyModifyRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.OK);
	}


	
	
}
