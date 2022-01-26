package com.ssafy.persona.content.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.ContentLikeListResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ContentReportRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyGetResponse;
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
	
	@ApiOperation(value = "content detail", notes = "게시글 상세조회", response = ContentGetResponse.class)
	@GetMapping("/content/{contentSeq}")
	public ResponseEntity<ContentGetResponse> contentGet(@PathVariable("contentSeq") @ApiParam(value = "조회할 글의 글번호", required = true) int contentSeq){
		return new ResponseEntity<ContentGetResponse>(contentService.contentGet(contentSeq), HttpStatus.OK);
	}
	
	@ApiOperation(value = "content personal list", notes = "특정 인물의 게시물 리스트 조회", response = ContentGetResponse.class)
	@GetMapping("/content/person/{characterSeq}")
	public ResponseEntity<List<ContentGetResponse>> contentPersonalList(@PathVariable("characterSeq") @ApiParam(value = "특정 인물을 조회할 캐릭터 번호.", required = true) int characterSeq){
		return new ResponseEntity<List<ContentGetResponse>>(contentService.contentPersonalList(characterSeq), HttpStatus.OK);
	}
	
	@ApiOperation(value = "content tag list", notes = "특정 태그의 게시물 리스트 조회", response = ContentGetResponse.class)
	@GetMapping("/content/tag/{tagText}")
	public ResponseEntity<List<ContentGetResponse>> contentTagList(@PathVariable("tagText") @ApiParam(value = "특정 태그를 조회할 태그 내용.", required = true) String tagText){
		return new ResponseEntity<List<ContentGetResponse>>(contentService.contentTagList(tagText), HttpStatus.OK);
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
	
	@ApiOperation(value = "reply delete", notes = "reply 삭제, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/content/reply/{replySeq}")
	public ResponseEntity<String> replyDelete(@PathVariable("replySeq") @ApiParam(value = "삭제할 댓글의 댓글번호.", required = true) int replySeq) {
		if (contentService.replyDelete(replySeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "reply list", notes = "댓글조회", response = List.class)
	@GetMapping("/content/reply/{contentSeq}")
	public ResponseEntity<List<ReplyGetResponse>> replylist(@PathVariable("contentSeq") @ApiParam(value = "댓글을 조회할 글번호.", required = true) int contentSeq){
		return new ResponseEntity<List<ReplyGetResponse>>(contentService.replyList(contentSeq), HttpStatus.OK);
	}
	
	@ApiOperation(value = "content report", notes = "content 신고, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content/report")
	public ResponseEntity<String> contentReport(@RequestBody @ApiParam(value = "게시글 신고.", required = true) ContentReportRequest contentReportRequest) {
		if (contentService.contentReport(contentReportRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "content like list", notes = "게시글 좋아요 누른 유저 리스트", response = List.class)
	@GetMapping("/content/likes/{contentSeq}")
	public ResponseEntity<List<ContentLikeListResponse>> contentLikeList(@PathVariable("contentSeq") @ApiParam(value = "리스트를 조회할 글번호.", required = true) int contentSeq){
		return new ResponseEntity<List<ContentLikeListResponse>>(contentService.contentLikeList(contentSeq), HttpStatus.OK);
	}


	
}
