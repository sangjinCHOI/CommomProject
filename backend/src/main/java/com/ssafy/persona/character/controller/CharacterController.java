package com.ssafy.persona.character.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
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
	
}
