package com.ssafy.persona.character.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.character.mapper.CategoryMapper;
import com.ssafy.persona.character.model.dto.CategoryGetRequest;
import com.ssafy.persona.character.model.dto.CategoryGetResponse;

@Service
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	CategoryMapper categoryMapper;
	
	@Override
	public List<CategoryGetResponse> getCategoryList(CategoryGetRequest param) {
		return categoryMapper.getCategoryList(param);
	}
}
