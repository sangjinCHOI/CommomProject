package com.ssafy.persona.domain.character.service;

import java.util.List;

import com.ssafy.persona.domain.character.model.dto.CategoryGetRequest;
import com.ssafy.persona.domain.character.model.dto.CategoryGetResponse;

public interface CategoryService {
	
	List<CategoryGetResponse> getCategoryList(CategoryGetRequest param);
	
}
