package com.ssafy.persona.content.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentLikeListResponse;

@Mapper
public interface LikeMapper {

	List<ContentLikeListResponse> contentLikeList(int contentSeq);

}
