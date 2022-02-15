package com.ssafy.persona.domain.content.mapper;

import java.util.List;

import com.ssafy.persona.domain.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.domain.content.model.dto.ContentGetResponse;
import com.ssafy.persona.domain.content.model.dto.ContentListRequest;
import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.domain.content.model.dto.ContentModifyRequest;

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
	int checkTodayContent(int characterSeq);
}
