package com.ssafy.persona.character.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.character.model.dto.CharacterUpdateRequest;
import com.ssafy.persona.character.service.CharacterService;

@RestController
@RequestMapping("/character")
public class CharacterController {

	public static final Logger logger = LoggerFactory.getLogger(CharacterController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private CharacterService characterService;
	
	@PostMapping("/")
	public ResponseEntity<String> createCharacter(@RequestBody CharacterCreatRequest ccr){
		logger.info("캐릭터 생성 요청 - 요청 유저 번호: "+ccr.getUserSeq());
		String message = "";
		HttpStatus status = null;
		
		if (characterService.regist(ccr) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		}else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		return new ResponseEntity<String>(message, status);
	}
	
	@PutMapping("/")
	public ResponseEntity<String> modifyCharacter(@RequestBody CharacterUpdateRequest cur){
		logger.info("캐릭터 정보 수정 요청 - 요청 캐릭터 번호: "+cur.getCharacterSeq());
		String message = "";
		HttpStatus status = null;
		
		if (characterService.update(cur) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		}else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		return new ResponseEntity<String>(message, status);
	}
	
	@DeleteMapping("/")
	public ResponseEntity<String> deleteCharacter(@RequestBody CharacterDeleteRequest cdr){
		logger.info("캐릭터 삭제 요청 - 요청 캐릭터 번호: "+cdr.getCharacterSeq());
		String message = "";
		HttpStatus status = null;
		
		if (characterService.delete(cdr) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		}else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		return new ResponseEntity<String>(message, status);
	}
	
	@GetMapping("/{characterSeq}")
	public ResponseEntity<CharacterGetResponse> characterDetail(@PathVariable int characterSeq){
		logger.info("캐릭터 정보 요청 - 요청 캐릭터 번호: "+characterSeq);
		
		return new ResponseEntity<CharacterGetResponse>(characterService.detail(characterSeq), HttpStatus.OK);
	}	// 예외처리 필요
		
	@GetMapping("characters")
	public ResponseEntity<List<CharacterGetResponse>> characterList(@PathVariable int userSeq){
		logger.info("캐릭터 리스트 - 요청 계정 번호: "+userSeq);
		
		return new ResponseEntity<List<CharacterGetResponse>>(characterService.list(userSeq), HttpStatus.OK);
	}	// 예외처리 필요
	
	
}
