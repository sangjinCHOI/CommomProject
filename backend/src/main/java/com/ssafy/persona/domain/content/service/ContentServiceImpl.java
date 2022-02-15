package com.ssafy.persona.domain.content.service;

import java.io.IOException;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.persona.domain.character.mapper.AchievementMapper;
import com.ssafy.persona.domain.character.mapper.AlarmMapper;
import com.ssafy.persona.domain.character.model.AlarmEnum;
import com.ssafy.persona.domain.character.model.dto.AchievementRegistRequest;
import com.ssafy.persona.domain.character.model.dto.AlarmCreateRequest;
import com.ssafy.persona.domain.content.mapper.ContentMapper;
import com.ssafy.persona.domain.content.mapper.LikeMapper;
import com.ssafy.persona.domain.content.mapper.ReplyMapper;
import com.ssafy.persona.domain.content.mapper.ReportMapper;
import com.ssafy.persona.domain.content.model.dto.ContentCreateRequest;
import com.ssafy.persona.domain.content.model.dto.ContentGetResponse;
import com.ssafy.persona.domain.content.model.dto.ContentLikeRequest;
import com.ssafy.persona.domain.content.model.dto.ContentListRequest;
import com.ssafy.persona.domain.content.model.dto.LikeListResponse;
import com.ssafy.persona.domain.content.model.dto.ContentModifyRequest;
import com.ssafy.persona.domain.content.model.dto.ContentReportRequest;
import com.ssafy.persona.domain.content.model.dto.ReplyCreateRequest;
import com.ssafy.persona.domain.content.model.dto.ReplyGetResponse;
import com.ssafy.persona.domain.content.model.dto.ReplyLikeRequest;
import com.ssafy.persona.domain.content.model.dto.ReplyModifyRequest;
import com.ssafy.persona.domain.content.model.dto.ReplyReportRequest;
import com.ssafy.persona.domain.file.model.dto.FileUploadRequest;
import com.ssafy.persona.domain.file.service.FileServiceImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContentServiceImpl implements ContentService {
	@Autowired
	ContentMapper contentMapper;
	@Autowired
	ReplyMapper replyMapper;
	@Autowired
	LikeMapper likeMapper;
	@Autowired
	ReportMapper reportMapper;
	@Autowired
	AchievementMapper achievementMapper;
	@Autowired
	AlarmMapper alarmMapper;
	
	private final FileServiceImpl fileService;
	
	@Transactional
	@Override
	public int contentCreate(ContentCreateRequest contentCreateRequest) {
		int result = 0;
		result = contentMapper.contentCreate(contentCreateRequest);
		int characterSeq = contentCreateRequest.getCharacterSeq();
		AchievementRegistRequest achievementRequest = null;
		// 업적
		LocalTime now = LocalTime.now();
		int hour = now.getHour();
		// 업적 매퍼 호출(17번)
		if(hour == 14) {
			AlarmCreateRequest alarm = null;
			achievementRequest = AchievementRegistRequest.builder()
					.characterSeq(contentCreateRequest.getCharacterSeq())
					.achievementSeq(17)
					.build();
			if (achievementMapper.checkIsGottenAchievement(achievementRequest) == 0) {
				achievementMapper.registCharacterAchievement(achievementRequest);
				alarm = AlarmCreateRequest.builder()
						.characterSeq(contentCreateRequest.getCharacterSeq())
						.alarmType(7)
						.alarmText(AlarmEnum.ALARM_FOR_ACHIEVMENT.creatResultText("카페인이 필요해"))
						.relationTb("tb_achievement")
						.targetSeq(contentCreateRequest.getCharacterSeq())
						.build();
		
				alarmMapper.createAlarm(alarm);
			}	
		}
		// 업적 18번
		if(hour == 11 || hour == 12) {
			AlarmCreateRequest alarm = null;
			achievementRequest = AchievementRegistRequest.builder()
					.characterSeq(contentCreateRequest.getCharacterSeq())
					.achievementSeq(18)
					.build();
			if (achievementMapper.checkIsGottenAchievement(achievementRequest) == 0) {
				achievementMapper.registCharacterAchievement(achievementRequest);
				alarm = AlarmCreateRequest.builder()
						.characterSeq(contentCreateRequest.getCharacterSeq())
						.alarmType(7)
						.alarmText(AlarmEnum.ALARM_FOR_ACHIEVMENT.creatResultText("밥은 먹고 다니냐?"))
						.relationTb("tb_achievement")
						.targetSeq(contentCreateRequest.getCharacterSeq())
						.build();
		
				alarmMapper.createAlarm(alarm);
			}
		}
		// 업적 19번
		if(contentMapper.checkTodayContent(characterSeq) >= 2) {
			AlarmCreateRequest alarm = null;
			achievementRequest = AchievementRegistRequest.builder()
					.characterSeq(contentCreateRequest.getCharacterSeq())
					.achievementSeq(19)
					.build();
			if (achievementMapper.checkIsGottenAchievement(achievementRequest) == 0) {
				achievementMapper.registCharacterAchievement(achievementRequest);
				alarm = AlarmCreateRequest.builder()
						.characterSeq(contentCreateRequest.getCharacterSeq())
						.alarmType(7)
						.alarmText(AlarmEnum.ALARM_FOR_ACHIEVMENT.creatResultText("묻고 더블로 가!"))
						.relationTb("tb_achievement")
						.targetSeq(contentCreateRequest.getCharacterSeq())
						.build();
		
				alarmMapper.createAlarm(alarm);
			}
		}
		if (contentCreateRequest.getMyfile() != null) {
			FileUploadRequest file = FileUploadRequest.builder()
					.myfile(contentCreateRequest.getMyfile())
					.fileType('2')
					.relationTb("tb_content")
					.relationSeq(contentCreateRequest.getContentSeq())
					.build();
			try {
				fileService.uploadFile(file);
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		return result;
	}

	@Override
	public boolean contentModify(ContentModifyRequest contentModifyRequest) {
		if (contentModifyRequest.getMyfile() != null) {
			FileUploadRequest file = FileUploadRequest.builder()
					.myfile(contentModifyRequest.getMyfile())
					.fileType('2')
					.relationTb("tb_content")
					.relationSeq(contentModifyRequest.getContentSeq())
					.build();
			try {
				fileService.modifyFile(file);
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		return contentMapper.contentModify(contentModifyRequest) == 1;
	}

	@Override
	public boolean contentDelete(int contentSeq) {
		return contentMapper.contentDelete(contentSeq) == 1;
	}

	@Override
	public boolean replyCreate(ReplyCreateRequest replyCreateRequest) {
		return replyMapper.replyCreate(replyCreateRequest) == 1;

	}

	@Override
	public boolean replyModify(ReplyModifyRequest replyModifyRequest) {
		return replyMapper.replyModify(replyModifyRequest) == 1;
	}

	@Override
	public boolean replyDelete(int replySeq) {
		return replyMapper.replyDelete(replySeq) == 1;
	}

	@Override
	public List<ReplyGetResponse> replyList(int characterNow, int contentSeq) {
		return replyMapper.replyList(characterNow, contentSeq);
	}

	@Override
	public List<LikeListResponse> contentLikeList(int contentSeq) {
		return likeMapper.contentLikeList(contentSeq);
	}

	@Override
	public List<LikeListResponse> replyLikeList(int replySeq) {
		return likeMapper.replyLikeList(replySeq);
	}

	@Override
	public boolean contentReport(ContentReportRequest contentReportRequest) {
		return reportMapper.contentReport(contentReportRequest) == 1;
	}
	
	@Override
	public void contentReportUpdate(int reportedContent) {
		reportMapper.contentReportUpdate(reportedContent);
		
	}

	@Override
	public void characterReportUpdate(int reportedContent) {
		reportMapper.characterReportUpdate(reportedContent);
	}

	@Override
	public boolean replyReport(ReplyReportRequest replyReportRequest) {
		return reportMapper.replyReport(replyReportRequest) == 1;
	}

	@Override
	public void replyReportUpdate(int reportedReply) {
		reportMapper.replyReportUpdate(reportedReply);
		
	}

	@Override
	public void characterReplyReportUpdate(int reportedReply) {
		reportMapper.characterReplyReportUpdate(reportedReply);
		
	}
	
	@Override
	public boolean contentLike(ContentLikeRequest contentLikeRequest) {
		return likeMapper.contentLike(contentLikeRequest) == 1;
	}

	@Override
	public void contentLikeUpdate(int contentSeq) {
		likeMapper.contentLikeUpdate(contentSeq);
		
	}

	@Override
	public boolean contentDislike(int characterSeq, int contentSeq) {
		return likeMapper.contentDislike(characterSeq, contentSeq) == 1;
	}

	@Override
	public void contentDislikeUpdate(int contentSeq) {
		likeMapper.contentDislikeUpdate(contentSeq);
		
	}

	@Override
	public boolean replyLike(ReplyLikeRequest replyLikeRequest) {
		return likeMapper.replyLike(replyLikeRequest) == 1;
	}

	@Override
	public void replyLikeUpdate(int replySeq) {
		likeMapper.replyLikeUpdate(replySeq);
	}

	@Override
	public boolean replyDislike(int characterSeq, int replySeq) {
		return likeMapper.replyDislike(characterSeq, replySeq) == 1;
	}

	@Override
	public void replyDislikeUpdate(int replySeq) {
		likeMapper.replyDislikeUpdate(replySeq);
		
	}

	@Override
	public ContentGetResponse contentGet(int characterNow, int contentSeq) {
		return contentMapper.contentGet(characterNow, contentSeq);
	}

	@Override
	public boolean hashtagCreate(String[] hashtag, int contentSeq) {
		return contentMapper.hashtagCreate(hashtag, contentSeq) == 1;
	}

	@Override
	public boolean hashtagModify(String[] hashtag, int contentSeq) {
		return contentMapper.hashtagModify(hashtag, contentSeq) == 1;
	}

	@Override
	public List<String> hashtagGet(int contentSeq) {
		return contentMapper.hashtagGet(contentSeq);
	}

	@Override
	public List<ContentGetResponse> contentList(ContentListRequest contentListRequest) {
		return contentMapper.contentList(contentListRequest);
	}

}