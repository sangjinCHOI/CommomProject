package com.ssafy.persona.character.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.character.model.dto.AlarmGetResponse;
import com.ssafy.persona.character.model.dto.AlarmUpdateRequest;
import com.ssafy.persona.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.character.model.dto.CharacterUpdateRequest;
import com.ssafy.persona.character.model.dto.FollowRequest;
import com.ssafy.persona.character.model.dto.FolloweeListRequest;
import com.ssafy.persona.character.model.dto.FollowerListRequest;
import com.ssafy.persona.character.model.dto.FollowerListResponse;
import com.ssafy.persona.character.service.CharacterService;
import com.ssafy.persona.character.service.FollowService;

@RestController
@RequestMapping("/character")
public class CharacterController {

	public static final Logger logger = LoggerFactory.getLogger(CharacterController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private CharacterService characterService;

	@Autowired
	private FollowService followService;

	@PostMapping("/")
	public ResponseEntity<Map<String, String>> createCharacter(@RequestBody CharacterCreatRequest request) {
		logger.info("캐릭터 생성 요청 - 요청 유저 번호: " + request.getUserSeq());
		String message = "";
		HttpStatus status = null;

		if (characterService.regist(request) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}

	@PutMapping("/")
	public ResponseEntity<Map<String, String>> modifyCharacter(@RequestBody CharacterUpdateRequest request) {
		logger.info("캐릭터 정보 수정 요청 - 요청 캐릭터 번호: " + request.getCharacterSeq());
		String message = "";
		HttpStatus status = null;

		if (characterService.update(request) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}

	@DeleteMapping("/")
	public ResponseEntity<Map<String, String>> deleteCharacter(@RequestBody CharacterDeleteRequest request) {
		logger.info("캐릭터 삭제 요청 - 요청 캐릭터 번호: " + request.getCharacterSeq());
		String message = "";
		HttpStatus status = null;

		if (characterService.delete(request) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}

	@GetMapping("/{characterSeq}")
	public ResponseEntity<CharacterGetResponse> characterDetail(@PathVariable int characterSeq) {
		logger.info("캐릭터 정보 요청 - 요청 캐릭터 번호: " + characterSeq);

		return new ResponseEntity<CharacterGetResponse>(characterService.detail(characterSeq), HttpStatus.OK);
	} // 예외처리 필요

	@GetMapping("characters/{userSeq}")
	public ResponseEntity<List<CharacterGetResponse>> characterList(@PathVariable int userSeq) {
		logger.info("캐릭터 리스트 - 요청 계정 번호: " + userSeq);

		return new ResponseEntity<List<CharacterGetResponse>>(characterService.list(userSeq), HttpStatus.OK);
	} // 예외처리 필요

	@PutMapping("/achievement")
	public ResponseEntity<Map<String, String>> updateRepresentativeAchievement(@RequestBody CharacterUpdateRequest cur) {
		logger.info("대표 업적 변경 - 요청 캐릭터 번호: " + cur.getCharacterSeq());
		String message = "";
		HttpStatus status = null;

		if (characterService.update(cur) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}

	@PostMapping("follow")
	public ResponseEntity<Map<String, String>> followRequest(@RequestBody FollowRequest request) {
		logger.info("팔로워 요청 - follwer: " + request.getFollower() + " followee: " + request.getFollowee());
		String message = "";
		HttpStatus status = null;

		if (followService.follow(request) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}

	@DeleteMapping("follow")
	public ResponseEntity<Map<String, String>> unFollowRequest(@RequestBody FollowRequest request) {
		logger.info("팔로워 삭제요청 - follower: " + request.getFollower() + " followee: " + request.getFollowee());
		String message = "";
		HttpStatus status = null;

		if (followService.unFollow(request) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}

	@PostMapping("followers")
	public ResponseEntity<List<FollowerListResponse>> followerList(@RequestBody FollowerListRequest request) {
		logger.info("follower list request - 요청캐릭터: " + request.getFollowee());

		return new ResponseEntity<List<FollowerListResponse>>(followService.getFollowerList(request), HttpStatus.OK);
	} // 예외처리 필요

	@PostMapping("followees")
	public ResponseEntity<List<Map<String, Integer>>> followeeList(@RequestBody FolloweeListRequest request) {
		logger.info("followee list request - 요청캐릭터: " + request.getFollower());

		List<Map<String, Integer>> result = new ArrayList<>();
		for (int i : followService.getFolloweeList(request)) {
			Map<String, Integer> tmpMap = new HashMap<>();
			tmpMap.put("followee", i);
			result.add(tmpMap);
		}
		
		return new ResponseEntity<List<Map<String, Integer>>>(result, HttpStatus.OK);

	} // 예외처리 필요
	
	@PostMapping("alarm")
	public ResponseEntity<Map<String, String>> createAlarm(@RequestBody AlarmCreateRequest request) {
		String message = "";
		HttpStatus status = null;

		if (characterService.createAlarm(request) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}
	
	@PutMapping("alarm")
	public ResponseEntity<Map<String, String>> updateAlarmStatus(@RequestBody AlarmUpdateRequest request) {
		logger.info("알람 설정 변경 - 변경 요청: "+request.getCharacterSeq());
		String message = "";
		HttpStatus status = null;

		if (characterService.updateAlarmStatus(request) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = FAIL;
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}
	
	@GetMapping("alarms/{characterSeq}")
	public ResponseEntity<List<AlarmGetResponse>> alarmList(@PathVariable int characterSeq) {
		logger.info("알람 리스트 요청 - 캐릭터 번호: " + characterSeq);

		return new ResponseEntity<List<AlarmGetResponse>>(characterService.getAlarmList(characterSeq), HttpStatus.OK);
	} // 예외처리 필요

	
	
}
