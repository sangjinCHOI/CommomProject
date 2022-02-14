package com.ssafy.persona.domain.search.mapper;

import java.util.List;

import com.ssafy.persona.domain.search.model.dto.CloudCreateRequest;
import com.ssafy.persona.domain.search.model.dto.SearchTagResponse;
import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.domain.search.model.dto.HistoryCreateRequest;
import com.ssafy.persona.domain.search.model.dto.HistoryGetRequest;
import com.ssafy.persona.domain.search.model.dto.RealTimeRequest;
import com.ssafy.persona.domain.search.model.dto.SearchContentResponse;
import com.ssafy.persona.domain.search.model.dto.SearchPeopleResponse;
import com.ssafy.persona.domain.search.model.dto.SearchStorageResponse;

@Mapper
public interface SearchMapper {

	List<SearchPeopleResponse> searchPeople(String text);
	
	List<SearchContentResponse> searchContent(String text);
	
	List<SearchStorageResponse> searchStorage(String text);
	
	List<SearchTagResponse> searchTag(String text);
	
	int checkHistory(HistoryCreateRequest request);
	
	int createHistory(HistoryCreateRequest request);
	
	int renewalHistory(HistoryCreateRequest request);
	
	int checkCloudWord(CloudCreateRequest request);
	
	int createCloudWord(CloudCreateRequest request);
	
	int increaseWeightCloud(CloudCreateRequest request);
	
	List<String> realTimePopularWord(RealTimeRequest request);
	
	List<String> getHistory(HistoryGetRequest request);
	
	List<String> SearchAutoCompletion(String text);
}
