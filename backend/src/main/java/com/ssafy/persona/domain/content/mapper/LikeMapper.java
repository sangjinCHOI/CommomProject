package com.ssafy.persona.domain.content.mapper;

import java.util.List;

import com.ssafy.persona.domain.content.model.dto.ReplyLikeRequest;
import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.domain.content.model.dto.ContentLikeRequest;
import com.ssafy.persona.domain.content.model.dto.LikeListResponse;

@Mapper
public interface LikeMapper {

	List<LikeListResponse> contentLikeList(int contentSeq);
	List<LikeListResponse> replyLikeList(int replySeq);

	int contentLike(ContentLikeRequest contentLikeRequest);
	void contentLikeUpdate(int contentSeq);
	int contentDislike(int characterSeq, int contentSeq);
	void contentDislikeUpdate(int contentSeq);
	int replyLike(ReplyLikeRequest replyLikeRequest);
	void replyLikeUpdate(int replySeq);
	int replyDislike(int characterSeq, int replySeq);
	void replyDislikeUpdate(int replySeq);
	

}