package com.ssafy.persona.content.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.ContentLikeRequest;
import com.ssafy.persona.content.model.dto.LikeListResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ContentReportRequest;
import com.ssafy.persona.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.content.model.dto.ReplyGetResponse;
import com.ssafy.persona.content.model.dto.ReplyLikeRequest;
import com.ssafy.persona.content.model.dto.ReplyModifyRequest;
import com.ssafy.persona.content.model.dto.ReplyReportRequest;
import com.ssafy.persona.content.service.ContentService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@Api("content controller API")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class ContentController {
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	ContentService contentService;

	@ApiOperation(value = "content create", notes = "content 작성, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content")
	public ResponseEntity<Map<String, Object>> contentCreate(@RequestBody @ApiParam(value = "게시글 정보.", required = true) ContentCreateRequest contentCreateRequest) {
		Map<String, Object> result = new HashMap<String, Object>();
		String message = FAIL;
		HttpStatus status = HttpStatus.ACCEPTED;
		if (contentService.contentCreate(contentCreateRequest)) {
			message = SUCCESS;
			status = HttpStatus.OK;
			result.put("message", message);
			result.put("content_seq", contentCreateRequest.getContentSeq());
		}
		return new ResponseEntity<Map<String, Object>>(result, status);
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
	@DeleteMapping("/content")
	public ResponseEntity<String> contentDelete(@RequestParam @ApiParam(value = "삭제할 글의 글번호.", required = true) int contentSeq) {
		if (contentService.contentDelete(contentSeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value = "content personal list", notes = "특정 인물의 게시물 리스트 조회", response = ContentGetResponse.class)
	@GetMapping("/content/person/{characterSeq}")
	public ResponseEntity<List<ContentGetResponse>> contentPersonalList(@RequestParam @ApiParam(value = "접속한 캐릭터 번호.", required = true) int characterNow, @PathVariable("characterSeq") @ApiParam(value = "조회할 캐릭터번호.", required = true) int characterSeq) {
		return new ResponseEntity<List<ContentGetResponse>>(contentService.contentPersonalList(characterNow, characterSeq), HttpStatus.OK);
	}

	@ApiOperation(value = "content tag list", notes = "특정 태그의 게시물 리스트 조회", response = ContentGetResponse.class)
	@GetMapping("/content/tag/{tagText}")
	public ResponseEntity<List<ContentGetResponse>> contentTagList(@RequestParam @ApiParam(value = "접속한 캐릭터 번호.", required = true) int characterNow, @PathVariable("tagText") @ApiParam(value = "조회할 태그.", required = true) String tagText) {
		return new ResponseEntity<List<ContentGetResponse>>(contentService.contentTagList(characterNow, tagText), HttpStatus.OK);
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
	@DeleteMapping("/content/reply")
	public ResponseEntity<String> replyDelete(@RequestParam @ApiParam(value = "삭제할 댓글의 댓글번호.", required = true) int replySeq) {
		if (contentService.replyDelete(replySeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value = "reply list", notes = "댓글 조회", response = List.class)
	@GetMapping("/content/reply/{contentSeq}")
	public ResponseEntity<List<ReplyGetResponse>> replylist(@RequestParam @ApiParam(value = "접속한 캐릭터 번호.", required = true) int characterNow, @PathVariable("contentSeq") @ApiParam(value = "댓글을 조회할 글번호.", required = true) int contentSeq) {
		return new ResponseEntity<List<ReplyGetResponse>>(contentService.replyList(characterNow, contentSeq), HttpStatus.OK);
	}

	@ApiOperation(value = "content like list", notes = "게시글 좋아요 누른 유저 리스트", response = List.class)
	@GetMapping("/content/likes/{contentSeq}")
	public ResponseEntity<List<LikeListResponse>> contentLikeList(@PathVariable("contentSeq") @ApiParam(value = "리스트를 조회할 글번호.", required = true) int contentSeq) {
		return new ResponseEntity<List<LikeListResponse>>(contentService.contentLikeList(contentSeq), HttpStatus.OK);
	}

	@ApiOperation(value = "reply like list", notes = "댓글 좋아요 누른 유저 리스트", response = List.class)
	@GetMapping("/content/reply/likes/{replySeq}")
	public ResponseEntity<List<LikeListResponse>> replyLikeList(@PathVariable("replySeq") @ApiParam(value = "리스트를 조회할 댓글번호.", required = true) int replySeq) {
		return new ResponseEntity<List<LikeListResponse>>(contentService.replyLikeList(replySeq), HttpStatus.OK);
	}

	@ApiOperation(value = "content report", notes = "content 신고, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content/report")
	public ResponseEntity<String> contentReport(@RequestBody @ApiParam(value = "게시글 신고.", required = true) ContentReportRequest contentReportRequest) {
		int reportedContent = contentReportRequest.getReportedContent();

		contentService.contentReportUpdate(reportedContent);
		contentService.characterReportUpdate(reportedContent);

		if (contentService.contentReport(contentReportRequest)) {

			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value = "reply report", notes = "reply 신고, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content/reply/report")
	public ResponseEntity<String> replyReport(@RequestBody @ApiParam(value = "댓글 신고.", required = true) ReplyReportRequest replyReportRequest) {
		int reportedReply = replyReportRequest.getReportedReply();

		contentService.replyReportUpdate(reportedReply);
		contentService.characterReplyReportUpdate(reportedReply);

		if (contentService.replyReport(replyReportRequest)) {

			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "content like", notes = "게시글 좋아요, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content/like")
	public ResponseEntity<String> contentLike(@RequestBody @ApiParam(value = "게시글 좋아요.", required = true) ContentLikeRequest contentLikeRequest) {
		int contentSeq = contentLikeRequest.getContentSeq();
		
		contentService.contentLikeUpdate(contentSeq);
		
		if (contentService.contentLike(contentLikeRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "content dislike", notes = "게시글 좋아요 취소, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/content/like")
	public ResponseEntity<String> contentDislike(@RequestParam @ApiParam(value = "캐릭터 번호.", required = true) int characterSeq, @RequestParam @ApiParam(value = "게시글 번호.", required = true) int contentSeq) {
		contentService.contentDislikeUpdate(contentSeq);
		
		if (contentService.contentDislike(characterSeq, contentSeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "reply like", notes = "댓글 좋아요, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content/reply/like")
	public ResponseEntity<String> replyLike(@RequestBody @ApiParam(value = "댓글 좋아요.", required = true) ReplyLikeRequest replyLikeRequest) {
		int replySeq = replyLikeRequest.getReplySeq();
		
		contentService.replyLikeUpdate(replySeq);
		
		if (contentService.replyLike(replyLikeRequest)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "reply dislike", notes = "댓글 좋아요 취소, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/content/reply/like")
	public ResponseEntity<String> replyDislike(@RequestParam @ApiParam(value = "캐릭터 번호.", required = true) int characterSeq, @RequestParam @ApiParam(value = "댓글 번호.", required = true) int replySeq) {
		contentService.replyDislikeUpdate(replySeq);
		
		if (contentService.replyDislike(characterSeq, replySeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	

	@ApiOperation(value = "content detail", notes = "게시글 상세조회", response = ContentGetResponse.class)
	@GetMapping("/content/{contentSeq}")
	public ResponseEntity<ContentGetResponse> contentGet(@RequestParam @ApiParam(value = "접속한 캐릭터 번호.", required = true) int characterNow, @PathVariable("contentSeq") @ApiParam(value = "조회할 글번호.", required = true) int contentSeq) {
		return new ResponseEntity<ContentGetResponse>(contentService.contentGet(characterNow, contentSeq), HttpStatus.OK);
	}
	
	@ApiOperation(value = "content list", notes = "게시글 리스트(메인페이지)", response = List.class)
	@GetMapping("/contents")
	public ResponseEntity<List<ContentGetResponse>> contentList(@RequestParam @ApiParam(value = "리스트를 조회할 캐릭터번호.", required = true) int characterNow) {
		return new ResponseEntity<List<ContentGetResponse>>(contentService.contentList(characterNow), HttpStatus.OK);
	}
	
	@ApiOperation(value = "hashtag create", notes = "hashtag 작성, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/content/tag/{contentSeq}")
	public ResponseEntity<String> hashtagCreate(@RequestBody @ApiParam(value = "hashtag[]", required = true) String[] hashtag, @PathVariable int contentSeq) {
		if (contentService.hashtagCreate(hashtag, contentSeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "hashtag modify", notes = "hashtag 수정, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("/content/tag/{contentSeq}")
	public ResponseEntity<String> hashtagModify(@RequestBody @ApiParam(value = "hashtag[]", required = true) String[] hashtag, @PathVariable int contentSeq) {
		contentService.hashtagModify(hashtag, contentSeq);
		if (contentService.hashtagCreate(hashtag, contentSeq)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	@ApiOperation(value = "hashtag get", notes = "hashtag 조회", response = List.class)
	@GetMapping("/content/tag/{contentSeq}")
	public ResponseEntity<List<String>> hashtagGet(@PathVariable("contentSeq") @ApiParam(value = "해시태그를 조회할 게시글 번호.", required = true) int contentSeq) {
		return new ResponseEntity<List<String>>(contentService.hashtagGet(contentSeq), HttpStatus.OK);
	}
	

}