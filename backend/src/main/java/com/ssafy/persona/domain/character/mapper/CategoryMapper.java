package com.ssafy.persona.domain.character.mapper;

import java.util.List;

import com.ssafy.persona.domain.character.model.dto.CategoryGetRequest;
import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.domain.character.model.dto.CategoryGetResponse;

@Mapper
public interface CategoryMapper {
	
	List<CategoryGetResponse> getCategoryList(CategoryGetRequest param);
	
}
