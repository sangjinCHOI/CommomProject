package com.ssafy.persona.character.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.character.model.dto.CategoryGetRequest;
import com.ssafy.persona.character.model.dto.CategoryGetResponse;

@Mapper
public interface CategoryMapper {
	
	List<CategoryGetResponse> getCategoryList(CategoryGetRequest param);
	
}
