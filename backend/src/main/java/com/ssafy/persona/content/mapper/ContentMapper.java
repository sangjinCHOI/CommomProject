package com.ssafy.persona.content.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.content.model.dto.ContentPersonListRequest;
import com.ssafy.persona.content.model.dto.ContentTagListRequest;

@Mapper
public interface ContentMapper {
	int contentCreate(ContentCreateRequest createContentRequest);
	int contentModify(ContentModifyRequest contentModifyRequest);
	int contentDelete(int contentSeq);
	List<ContentGetResponse> contentPersonalList(ContentPersonListRequest contentPersonListRequest);
	List<ContentGetResponse> contentTagList(ContentTagListRequest contentTagListRequest);
	ContentGetResponse contentGet(ContentGetRequest contentGetRequest);
	List<ContentGetResponse> contentList(int characterNow);
	int hashtagCreate(List<String> hashtag, int contentSeq);
	int hashtagModify(List<String> hashtag, int contentSeq);
	List<String> hashtagGet(int contentSeq);
}
