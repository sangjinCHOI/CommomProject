package com.ssafy.persona.search.mapper;

import java.time.LocalDate;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.search.model.dto.CloudCreateRequest;
import com.ssafy.persona.search.model.dto.HistoryCreateRequest;
import com.ssafy.persona.search.model.dto.SearchContentResponse;
import com.ssafy.persona.search.model.dto.SearchPeopleResponse;
import com.ssafy.persona.search.model.dto.SearchStorageResponse;
import com.ssafy.persona.search.model.dto.SearchTagResponse;

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
	
	List<String> realTimePopularWord(String searchDate);
	
	List<String> getHistory(int characterSeq);
	
	List<String> SearchAutoCompletion(String text);
}
