package com.ssafy.persona.content.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;

@Mapper
public interface ContentMapper {
	int contentCreate(ContentCreateRequest createContentRequest);
	int contentModify(ContentModifyRequest contentModifyRequest);
	int contentDelete(int contentSeq);
	List<ContentGetResponse> contentPersonalList(int characterSeq);
	List<ContentGetResponse> contentTagList(String tagText);
	ContentGetResponse contentGet(ContentGetRequest contentGetRequest);
}
