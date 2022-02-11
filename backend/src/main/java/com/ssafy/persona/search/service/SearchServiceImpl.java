package com.ssafy.persona.search.service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.persona.search.mapper.SearchMapper;
import com.ssafy.persona.search.model.dto.CloudCreateRequest;
import com.ssafy.persona.search.model.dto.HistoryCreateRequest;
import com.ssafy.persona.search.model.dto.HistoryGetRequest;
import com.ssafy.persona.search.model.dto.RealTimeRequest;
import com.ssafy.persona.search.model.dto.SearchContentResponse;
import com.ssafy.persona.search.model.dto.SearchPeopleResponse;
import com.ssafy.persona.search.model.dto.SearchStorageResponse;
import com.ssafy.persona.search.model.dto.SearchTagResponse;

@Service
public class SearchServiceImpl implements SearchService {

	@Autowired
	SearchMapper searchMapper;
	
	@Override
	public List<SearchPeopleResponse> searchPeople(String text) {
		return searchMapper.searchPeople(text);
	}

	@Override
	public List<SearchContentResponse> searchContent(String text) {
		return searchMapper.searchContent(text);
	}

	@Override
	public List<SearchStorageResponse> searchStorage(String text) {
		return searchMapper.searchStorage(text);
	}

	@Override
	public List<SearchTagResponse> searchTag(String text) {
		return searchMapper.searchTag(text);
	}

	@Override
	@Transactional
	public int searchRecord(HistoryCreateRequest request) {
		int flag = 0;
		if (searchMapper.checkHistory(request) == 0) {
			flag = searchMapper.createHistory(request);
		}else {
			flag = searchMapper.renewalHistory(request);
		}
		LocalDate today = LocalDate.now();
		CloudCreateRequest cloudCreateRequest = CloudCreateRequest.builder()
				.searchWord(request.getSearchHistoryText())
				.searchDate(String.valueOf(today))
				.build();
		
		int textWeight = searchMapper.checkCloudWord(cloudCreateRequest);
		cloudCreateRequest.setSearchWeight(textWeight+1);
		if ( flag == 1 && textWeight == 0) {
			flag = searchMapper.createCloudWord(cloudCreateRequest);
		}else {
			flag = searchMapper.increaseWeightCloud(cloudCreateRequest);
		}
		
		return flag;
	}

	@Override
	public List<String> realTimePopularWord(LocalDate today) {
		RealTimeRequest request = RealTimeRequest.builder()
				.searchDate(String.valueOf(today)).build();
		return searchMapper.realTimePopularWord(request);
	}

	@Override
	public List<String> getHistory(int characterSeq) {
		HistoryGetRequest request = HistoryGetRequest.builder()
				.characterSeq(characterSeq).build();
		return searchMapper.getHistory(request);
	}

	@Override
	public Map<String, List<String>> getHistory(HistoryGetRequest request) {
		Map<String, List<String>> result = new HashMap<>();
		RealTimeRequest text = RealTimeRequest.builder()
				.searchWord(request.getSearchWord()).build();
		try {
			result.put("history", searchMapper.getHistory(request));
			result.put("chart", searchMapper.realTimePopularWord(text));
		} catch (NullPointerException e) {
			e.printStackTrace();
		}
		
		return result;
	}

	
	
}
