package com.ssafy.persona.content.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.content.model.dto.ContentGetResponse;
import com.ssafy.persona.content.model.dto.ContentListRequest;
import com.ssafy.persona.content.model.dto.ContentModifyRequest;

@Mapper
public interface ContentMapper {
	int contentCreate(ContentCreateRequest createContentRequest);
	int contentModify(ContentModifyRequest contentModifyRequest);
	int contentDelete(int contentSeq);
	ContentGetResponse contentGet(int characterNow, int contentSeq);
	List<ContentGetResponse> contentList(ContentListRequest contentListRequest);
	int hashtagCreate(String[] hashtag, int contentSeq);
	int hashtagModify(String[] hashtag, int contentSeq);
	List<String> hashtagGet(int contentSeq);
}
