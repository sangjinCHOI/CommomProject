package com.ssafy.persona.search.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.search.model.dto.HistoryCreateRequest;
import com.ssafy.persona.search.model.dto.SearchContentResponse;
import com.ssafy.persona.search.model.dto.SearchPeopleResponse;
import com.ssafy.persona.search.model.dto.SearchStorageResponse;
import com.ssafy.persona.search.model.dto.SearchTagResponse;
import com.ssafy.persona.search.service.SearchService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/search")
public class SearchController {

	public static final Logger logger = LoggerFactory.getLogger(SearchController.class);
	private static final String SUCCESS = "success";
	
	@Autowired
	private SearchService searchService;
	
	@GetMapping("/characters/{text}")
	public ResponseEntity<List<SearchPeopleResponse>> searchPeople(@PathVariable String text){
		logger.info("인명 검색 요청 텍스트: "+text);
		
		return new ResponseEntity<List<SearchPeopleResponse>>(searchService.searchPeople(text), HttpStatus.OK);
	}
	
	@GetMapping("/contents/{text}")
	public ResponseEntity<List<SearchContentResponse>> searchContent(@PathVariable String text){
		logger.info("게시물 검색 요청 텍스트: "+text);
		
		return new ResponseEntity<List<SearchContentResponse>>(searchService.searchContent(text), HttpStatus.OK);
	}
	
	@GetMapping("/storages/{text}")
	public ResponseEntity<List<SearchStorageResponse>> searchStorage(@PathVariable String text){
		logger.info("저장목록 검색 요청 텍스트: "+text);
		
		return new ResponseEntity<List<SearchStorageResponse>>(searchService.searchStorage(text), HttpStatus.OK);
	}
	
	@GetMapping("/tags/{text}")
	public ResponseEntity<List<SearchTagResponse>> searchTag(@PathVariable String text){
		logger.info("태그 검색 요청 텍스트: "+text);
		
		return new ResponseEntity<List<SearchTagResponse>>(searchService.searchTag(text), HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<Map<String, String>> searchRecord(@RequestBody HistoryCreateRequest request){
		String message = "";
		HttpStatus status = null;

		if (searchService.searchRecord(request) == 1) {
			message = SUCCESS;
			status = HttpStatus.OK;
		} else {
			message = "검색 기록 실패 ";
			status = HttpStatus.CONFLICT;
		}
		Map<String, String> result = new HashMap<String, String>();
		result.put("message", message);
		return new ResponseEntity<Map<String, String>>(result, status);
	}
	
	@GetMapping("realTimeChart")
	public ResponseEntity<List<String>> realTimePopularWord(){
		logger.info("실시간 검색 차트 요청");
		LocalDate today = LocalDate.now();
		return new ResponseEntity<List<String>>(searchService.realTimePopularWord(today), HttpStatus.OK);
	}
	
	@GetMapping("history/{characterSeq}")
	public ResponseEntity<List<String>> getHistory(@PathVariable int characterSeq){
		logger.info("검색 기록  요청");
		return new ResponseEntity<List<String>>(searchService.getHistory(characterSeq), HttpStatus.OK);
	}
	
	@GetMapping("autoComplete/{text}")
	public ResponseEntity<List<String>> autoComplete(@PathVariable String text){
		logger.info("검색어 자동 완성 - 요청 text: "+ text);
		return new ResponseEntity<List<String>>(new ArrayList<String>() , HttpStatus.OK);
	}
	
}
