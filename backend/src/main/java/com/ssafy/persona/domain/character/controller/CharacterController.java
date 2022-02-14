package com.ssafy.persona.domain.character.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.persona.domain.character.model.AlarmEnum;
import com.ssafy.persona.domain.character.model.dto.AchievementGetRequest;
import com.ssafy.persona.domain.character.model.dto.AchievementGetResponse;
import com.ssafy.persona.domain.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.domain.character.model.dto.AlarmGetResponse;
import com.ssafy.persona.domain.character.model.dto.AlarmSettingUpdateRequest;
import com.ssafy.persona.domain.character.model.dto.CategoryGetRequest;
import com.ssafy.persona.domain.character.model.dto.CategoryGetResponse;
import com.ssafy.persona.domain.character.model.dto.CharacterCreatRequest;
import com.ssafy.persona.domain.character.model.dto.CharacterDeleteRequest;
import com.ssafy.persona.domain.character.model.dto.CharacterGetResponse;
import com.ssafy.persona.domain.character.model.dto.CharacterProfileResponse;
import com.ssafy.persona.domain.character.model.dto.CharacterUpdateRequest;
import com.ssafy.persona.domain.character.model.dto.FollowRequest;
import com.ssafy.persona.domain.character.model.dto.FolloweeListRequest;
import com.ssafy.persona.domain.character.model.dto.FollowerListRequest;
import com.ssafy.persona.domain.character.model.dto.FollowerListResponse;
import com.ssafy.persona.domain.character.model.dto.SendCharacterCreateRequest;
import com.ssafy.persona.domain.character.model.dto.SendCharacterUpdateRequest;
import com.ssafy.persona.domain.character.service.AchievementService;
import com.ssafy.persona.domain.character.service.AlarmService;
import com.ssafy.persona.domain.character.service.CategoryService;
import com.ssafy.persona.domain.character.service.CharacterService;
import com.ssafy.persona.domain.character.service.FollowService;

//@CrossOrigin(origins = { "*" }, maxAge = 6000)
//@CrossOrigin(origins = "http://localhost:3000")
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
	@Autowired
	private AlarmService alarmService;
	@Autowired
	private AchievementService achievementService;
	@Autowired
	private CategoryService categoryService;

	@PostMapping("")
	public ResponseEntity<Map<String, String>> createCharacter(@RequestPart(value="file", required = false) MultipartFile[] file,
															   @RequestPart(value="request") SendCharacterCreateRequest request) {
		logger.info("캐릭터 생성 요청 - 요청 유저 번호: " + request.getUserSeq());
		String message = "";
		HttpStatus status = null;
		CharacterCreatRequest sendRequest = new CharacterCreatRequest(
								0,
										file,
										request.getUserSeq(),
										request.getCategoryNumber(),
										request.getNickname(),
										request.getIntroduction());
		if (characterService.regist(sendRequest) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = "생성가능한 캐릭터 초과 또는 알 수 없는 에러입니다.";
			status = HttpStatus.ACCEPTED;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}
	
	@PutMapping("")
	public ResponseEntity<Map<String, String>> modifyCharacter(@RequestPart(value="file", required = false) MultipartFile[] file,
															   @RequestPart(value="request") SendCharacterUpdateRequest request) {

		CharacterUpdateRequest sendRequest = new CharacterUpdateRequest(
				file,
				request.getCharacterSeq(),
				request.getNickname(),
				request.getIntroduction(),
				request.getRepresentativeAchievement()
		);

		logger.info("캐릭터 정보 수정 요청 - 요청 캐릭터 번호: " + request.getCharacterSeq());
		String message = "";
		HttpStatus status = null;

		if (characterService.update(sendRequest) == 1) {
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

	@PutMapping("alarmStatus")
	public ResponseEntity<Map<String, String>> updateAlarmStatus(@RequestBody AlarmSettingUpdateRequest request) {
		logger.info("알람 설정 변경 - 변경 요청: " + request.getCharacterSeq());
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

	@DeleteMapping("")
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

	@GetMapping("/profile/{nickname}")
	public ResponseEntity<CharacterProfileResponse> characterProfile(@PathVariable String nickname) {
		logger.info("프로필 요청 - 해당 캐릭터 닉네임: " + nickname);
		
		return new ResponseEntity<CharacterProfileResponse>(characterService.getCharacterProfile(nickname), HttpStatus.OK);
	} // 예외처리 필요
	
	@DeleteMapping("/profile/{characterSeq}")
	public ResponseEntity<Map<String, String>> deleteProfile(@PathVariable int characterSeq) {
		String message = "";
		HttpStatus status = null;

		if (characterService.setCharacterProfileDefault(characterSeq) == 1) {
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
	
	@GetMapping("characters/{userSeq}")
	public ResponseEntity<List<CharacterGetResponse>> characterList(@PathVariable int userSeq) {
		logger.info("캐릭터 리스트 - 요청 계정 번호: " + userSeq);

		return new ResponseEntity<List<CharacterGetResponse>>(characterService.list(userSeq), HttpStatus.OK);
	} // 예외처리 필요

	@GetMapping("/nickname")
	public ResponseEntity<Map<String, String>> checkNickname(@RequestParam String nickname) {
		String message = "";
		HttpStatus status = null;
		if (characterService.checkCharacterNickname(nickname) == 1) {
			message = "이미 존재하는 닉네임 입니다.";
			status = HttpStatus.BAD_REQUEST;
		} else {
			message = "해당 닉네임은 사용가능합니다. 사용하시겠습니까?";
			status = HttpStatus.OK;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);

	}

	@GetMapping("/categorys")
	public ResponseEntity<List<CategoryGetResponse>> categoryList(@RequestParam(required = false) String order, @RequestParam(required = false) String searchText) {
		CategoryGetRequest param = CategoryGetRequest.builder()
				.order(order)
				.searchText(searchText)
				.build();
		
		return new ResponseEntity<List<CategoryGetResponse>>(categoryService.getCategoryList(param), HttpStatus.OK);
	} 
	
	@PutMapping("/achievement/representative")
	public ResponseEntity<Map<String, String>> updateRepresentativeAchievement(
			@RequestBody CharacterUpdateRequest cur) {
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
			message = "이미 팔로우된 관계 또는 서버오류입니다.";
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

		AlarmEnum type = makeAlarmText(request.getAlarmType());
		String target = getTarget(request);
		String text = type.creatResultText(target);
		request.setAlarmText(text);
		
		if (alarmService.createAlarm(request) == 1) {
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

	private String getTarget(AlarmCreateRequest request) {
		return alarmService.makeAlarmTarget(request);
	}
	
	private AlarmEnum makeAlarmText(int alarmType) {
		AlarmEnum result = null;
		switch (alarmType) {
		case 1:
			result = AlarmEnum.ALARM_FOR_FOLLOW;
			break;
		case 2:
			result = AlarmEnum.ALARM_STORAGE_CREATE;
			break;
		case 3:
			result = AlarmEnum.ALARM_STORAGE_DELETE;
			break;
		case 4:
			result = AlarmEnum.ALARM_STORAGE_CONTENT_ADD;
			break;
		case 5:
			result = AlarmEnum.ALARM_STORAGE_CONTENT_DELETE;
			break;
		case 6:
			result = AlarmEnum.ALARM_STORAGE_CONTENT_UPDATE;
			break;
		case 7:
			result = AlarmEnum.ALARM_FOR_ACHIEVMENT;
			break;
		}
		return result;
	}
	
	@GetMapping("alarm/{alarmSeq}")
	public ResponseEntity<AlarmGetResponse> alarmRead(@PathVariable int alarmSeq) {
		logger.info("알람 클릭 - 호출번호: " + alarmSeq);

		return new ResponseEntity<AlarmGetResponse>(alarmService.alarmRead(alarmSeq), HttpStatus.OK);
	}

	@GetMapping("alarms/{characterSeq}")
	public ResponseEntity<List<AlarmGetResponse>> alarmList(@PathVariable int characterSeq) {
		logger.info("알람 리스트 요청 - 캐릭터 번호: " + characterSeq);

		return new ResponseEntity<List<AlarmGetResponse>>(alarmService.getAlarmList(characterSeq), HttpStatus.OK);
	} // 예외처리 필요
	
	@PostMapping("/achievements")
	public ResponseEntity<List<AchievementGetResponse>> achievementList(@RequestBody AchievementGetRequest request) {
		logger.info("업적 리스트 요청 - 캐릭터 번호: "+request.getCharacterSeq());

		return new ResponseEntity<List<AchievementGetResponse>>(achievementService.getAchievementList(request), HttpStatus.OK);
	} // 예외처리 필요
}
