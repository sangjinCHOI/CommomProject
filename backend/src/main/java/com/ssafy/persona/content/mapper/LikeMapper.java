package com.ssafy.persona.content.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.content.model.dto.ContentLikeRequest;
import com.ssafy.persona.content.model.dto.LikeListResponse;

@Mapper
public interface LikeMapper {

	List<LikeListResponse> contentLikeList(int contentSeq);
	List<LikeListResponse> replyLikeList(int replySeq);

	int contentLike(ContentLikeRequest contentLikeRequest);
	void contentLikeUpdate(int contentSeq);
	int contentDislike(ContentLikeRequest contentLikeRequest);
	void contentDislikeUpdate(int contentSeq);

}