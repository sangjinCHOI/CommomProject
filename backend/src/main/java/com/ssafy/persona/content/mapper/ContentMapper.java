package com.ssafy.persona.content.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;

@Mapper
public interface ContentMapper {
	int contentCreate(ContentCreateRequest createContentRequest);
	int contentModify(ContentModifyRequest contentModifyRequest);
	int contentDelete(int contentSeq);
	List<ContentGetResponse> contentPersonalList(int characterNow, int characterSeq);
	List<ContentGetResponse> contentTagList(int characterNow, String tagText);
	ContentGetResponse contentGet(int characterNow, int contentSeq);
	List<ContentGetResponse> contentList(int characterNow);
	int hashtagCreate(String hashtag, int contentSeq);
	int hashtagModify(String hashtag, int contentSeq);
	List<String> hashtagGet(int contentSeq);
}
