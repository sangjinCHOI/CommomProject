package com.ssafy.persona.character.service;

import java.util.List;

import com.ssafy.persona.character.model.dto.CategoryGetRequest;
import com.ssafy.persona.character.model.dto.CategoryGetResponse;

public interface CategoryService {
	
	List<CategoryGetResponse> getCategoryList(CategoryGetRequest param);
	
}
