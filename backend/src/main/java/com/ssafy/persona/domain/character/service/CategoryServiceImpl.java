package com.ssafy.persona.domain.character.service;

import java.util.List;

import com.ssafy.persona.domain.character.mapper.CategoryMapper;
import com.ssafy.persona.domain.character.model.dto.CategoryGetRequest;
import com.ssafy.persona.domain.character.model.dto.CategoryGetResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService{

	@Autowired
    CategoryMapper categoryMapper;
	
	@Override
	public List<CategoryGetResponse> getCategoryList(CategoryGetRequest param) {
		return categoryMapper.getCategoryList(param);
	}
}
