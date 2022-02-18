CREATE SCHEMA `persona` ;

use `persona`;

DROP TABLE IF EXISTS `tb_achievement`;

CREATE TABLE `tb_achievement` (
  `achievement_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `achievement_name` varchar(45) DEFAULT NULL COMMENT '업적 명',
  `achievement_description` varchar(500) DEFAULT NULL COMMENT '업적 설명 - 모든 업적에 대해 대략적 설명',
  `achievement_condition` varchar(500) DEFAULT NULL COMMENT '업적 조건 - ex: 친구 5명 달성',
  `achievement_type` int DEFAULT NULL COMMENT '업적 종류',
  `achievement_level` int DEFAULT NULL COMMENT '업적 난이도',
  `achievement_is_active` tinyint DEFAULT NULL COMMENT '업적 활성화 여부',
  `achievement_created_date` timestamp NULL DEFAULT NULL COMMENT '업적 생성 일시',
  PRIMARY KEY (`achievement_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='업적 목록이 저장돼 있는 테이블';

DROP TABLE IF EXISTS `tb_alarm`;

CREATE TABLE `tb_alarm` (
  `alarm_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `user_seq` int DEFAULT NULL COMMENT '대상 유저 번호',
  `character_seq` int DEFAULT NULL COMMENT '대상 캐릭터 번호',
  `alarm_type` char(1) DEFAULT NULL COMMENT '알람 종류',
  `alarm_text` varchar(200) DEFAULT NULL COMMENT '알람 글',
  `relation_tb` varchar(45) NOT NULL COMMENT '연관 있는 테이블',
  `target_seq` int not null COMMENT '연관 있는 테이블의 PK',
  `alarm_is_read` tinyint DEFAULT NULL COMMENT '알람 열람 여부',
  `alarm_date` timestamp NULL DEFAULT NULL COMMENT '알람 일시',
  PRIMARY KEY (`alarm_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='모든 종류의 알람이 저장';

drop table if exists `tb_user_achievement`;

create table `tb_user_achievement`(
	`user_achievement_seq` int not null AUTO_INCREMENT comment '일련번호',
    `character_seq` int not null comment '해당 캐릭터 PK',
    `achievement_seq` int not null comment '해당 업적 PK',
    `user_achievement_date` timestamp NULL DEFAULT NULL COMMENT '업적 완료 일시',
    primary key(`user_achievement_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='유저 완료한 업적 저장 테이블';


DROP TABLE IF EXISTS `tb_auth_number`;

CREATE TABLE `tb_auth_number` (
  `auth_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `user_seq` int NOT NULL COMMENT '인증 요청한 유저 번호',
  `auth_text` varchar(45) NOT NULL COMMENT '인증 문자열',
  `auth_created_date` timestamp NOT NULL COMMENT '요청 일시',
  PRIMARY KEY (`auth_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='이메일 인증 시 사용되는 인증 번호를 저장하는 테이블';


DROP TABLE IF EXISTS `tb_character`;

CREATE TABLE `tb_character` (
  `character_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `user_seq` int NOT NULL COMMENT '계정의 유저번호',
  `category_number` int NOT NULL COMMENT '카테고리',
  `nickname` varchar(30) NOT NULL COMMENT '닉네임',
  `introduction` varchar(150) DEFAULT NULL COMMENT '캐릭터 소개',
  `representative_achievement` int DEFAULT null COMMENT '현재 대표업적',
  `alarm_allow` tinyint(1) DEFAULT NULL COMMENT '모든 알림 허용',
  `like_alarm` tinyint(1) DEFAULT NULL COMMENT '좋아요 알림',
  `reply_alarm` tinyint(1) DEFAULT NULL COMMENT '댓글 알림',
  `follow_alarm` tinyint(1) DEFAULT NULL COMMENT '팔로우 알림',
  `modify_alarm` tinyint(1) DEFAULT NULL COMMENT '저장 목록 수정 알림',
  `reported_time` int DEFAULT NULL COMMENT '신고당한 횟수',
  `character_active` tinyint(1) NOT NULL DEFAULT '1' COMMENT '활성화 여부',
  `character_delete_reason` char(1) DEFAULT NULL COMMENT '삭제 이유',
  `character_created_date` timestamp NULL DEFAULT NULL COMMENT '캐릭터 생성 일시',
  `character_modified_date` timestamp NULL DEFAULT NULL COMMENT '캐릭터 수정 일시',
  PRIMARY KEY (`character_seq`),
  UNIQUE KEY `nickname_UNIQUE` (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='캐릭터 관리 테이블';


DROP TABLE IF EXISTS `tb_character_category`;

CREATE TABLE `tb_character_category` (
  `character_category_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `character_category_number` int NOT NULL COMMENT '카테고리 숫자?',
  `character_category_name` varchar(45) DEFAULT NULL COMMENT '카테고리 명',
  `character_category_is_active` tinyint DEFAULT '1' COMMENT '활성화 여부',
  PRIMARY KEY (`character_category_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='캐릭터 생성 시 선택 가능한 카테고리의 목록 테이블 ';


DROP TABLE IF EXISTS `tb_content`;

CREATE TABLE `tb_content` (
  `content_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `character_seq` int NOT NULL COMMENT '콘텐츠 작성자 - 캐릭터 일련번호',
  `category_number` int NOT NULL COMMENT '글 작성자의 카테고리',
  `content_text` varchar(5000) DEFAULT NULL COMMENT '글 내용',
  `content_like` int NOT NULL DEFAULT '0' COMMENT '좋아요 수',
  `content_save` int NOT NULL DEFAULT '0' COMMENT '저장된 횟수',
  `content_is_public` tinyint(1) NOT NULL DEFAULT '0' COMMENT '전체 공개 여부',
  `content_is_media` tinyint(1) NOT NULL DEFAULT '0' COMMENT '사진, 동영상 첨부 여부',
  `content_is_active` tinyint(1) NOT NULL DEFAULT '1' COMMENT '활성화 여부',
  `content_is_report` tinyint(1) NOT NULL DEFAULT '0' COMMENT '신고 여부',
  `content_created_date` timestamp NULL DEFAULT NULL COMMENT '생성 일자',
  `content_modified_date` timestamp NULL DEFAULT NULL COMMENT '수정 일자',
  `content_is_like` int not null default '0' comment 'content_is_like',
  `content_is_store` int not null default '0' comment 'content_is_store',
  PRIMARY KEY (`content_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='모든 게시물을 저장하는 테이블';

drop table if exists `tb_content_like`;

create table `tb_content_like` (
	`content_like_seq` int not null auto_increment comment '일련 번호',
    `content_seq` int not null comment '게시물 PK',
    `character_seq` int not null comment '캐릭터 PK',
    primary key(`content_like_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='모든 게시물을 저장하는 테이블';

DROP TABLE IF EXISTS `tb_file`;

CREATE TABLE `tb_file` (
  `file_seq` int NOT NULL AUTO_INCREMENT,
  `file_name` varchar(500) NOT NULL COMMENT '파일명',
  `file_size` bigint NOT NULL COMMENT '파일 크기',
  `file_path` varchar(1000) NOT NULL COMMENT '파일 위치',
  `file_type` char(1) NOT NULL COMMENT '파일 종류(1 : 일반, 2 : 이미지, 3 : 동영상)',
  `relation_tb` varchar(45) NOT NULL COMMENT '연관 있는 테이블',
  `relation_seq` int NOT NULL COMMENT '연관 있는 테이블에서의 일련번호',
  `file_registered_date` timestamp NULL DEFAULT NULL COMMENT '등록 일시',
  `file_modified_date` timestamp NULL DEFAULT NULL COMMENT '수정 일시',
  `file_is_active` int default '1' COMMENT '파일 활성화 여부',
  PRIMARY KEY (`file_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='모든 종류의 파일을 저장하는 테이블';


DROP TABLE IF EXISTS `tb_follow`;

CREATE TABLE `tb_follow` (
  `follow_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `follower` int DEFAULT NULL COMMENT '팔로우 누른사람',
  `followee` int DEFAULT NULL COMMENT '팔로우를 받은 사람',
  `followed_date` timestamp NULL DEFAULT NULL COMMENT '팔로우한 날짜',
  PRIMARY KEY (`follow_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='팔로우 저장 테이블 ';

DROP TABLE IF EXISTS `tb_mail`;

CREATE TABLE `tb_mail` (
  `mail_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `user_seq` int NOT NULL COMMENT '수신 받은 유저 번호',
  `mail_type` char(1) NOT NULL COMMENT '메일 종류(1: 인증요청, 2: 임시비밀번호, 3: 이외 보안 관련 메일 등)',
  `mail_text` varchar(1000) NOT NULL COMMENT '메일 텍스트',
  `mail_send_date` timestamp NOT NULL COMMENT '전송 일시',
  PRIMARY KEY (`mail_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='보낸 모든 메일이 저장되는 테이블';


DROP TABLE IF EXISTS `tb_reply`;

CREATE TABLE `tb_reply` (
  `reply_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `content_seq` int NOT NULL COMMENT '게시물 번호',
  `character_seq` int NOT NULL COMMENT '댓글 작성자 - 캐릭터 일련번호',
  `reply_text` varchar(500) DEFAULT NULL COMMENT '댓글',
  `reply_like` int NOT NULL DEFAULT '0' COMMENT '좋아요 수',
  `reply_is_active` tinyint(1) NOT NULL DEFAULT '1' COMMENT '활성화 여부',
  `reply_is_report` tinyint(1) NOT NULL DEFAULT '0' COMMENT '피신고 여부',
  `reply_created_date` timestamp NULL DEFAULT NULL COMMENT '댓글 작성 일시',
  `reply_modified_date` timestamp NULL DEFAULT NULL COMMENT '댓글 수정 일시',
  `reply_is_like` int not null default '0' comment 'reply_is like',
  PRIMARY KEY (`reply_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='댓글을 저장하는 테이블';

drop table if exists `tb_reply_like`;

create table `tb_reply_like`(
	`reply_like_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
    `reply_seq` int not null comment '좋아요 대상 댓글',
    `character_seq` int not null comment '좋아요 누른 캐릭터',
    primary key (`reply_like_seq`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='댓글을 저장하는 테이블';

drop table if exists `tb_reply_report`;

create table `tb_reply_report`(
	`report_reply_seq` int not null auto_increment comment '일련번호',
    `reporting_character` int not null comment '신고한 캐릭터 PK',
    `reported_reply` int not null comment '신고된 댓글 PK',
    `report_type` int not null comment '신고 타입',
    `report_text` varchar(100) comment '신고 내용',
    `Local_date_time` timestamp NULL DEFAULT NULL COMMENT '댓글 신고 일시',
    primary key(`report_reply_seq`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='신고된 댓글 저장하는 테이블';

drop table if exists `tb_content_report`;

CREATE TABLE `tb_content_report` (
  `report_content_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `reporting_character` int DEFAULT NULL COMMENT '신고한 유저의 캐릭터',
  `reported_content` int DEFAULT NULL COMMENT '신고당한 게시물',
  `report_type` int DEFAULT NULL COMMENT '신고 종류',
  `report_text` varchar(100) DEFAULT NULL COMMENT '신고 이유',
  `reported_date` timestamp NULL DEFAULT NULL COMMENT '신고된 일시',
  PRIMARY KEY (`report_content_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='신고를 저장하는 테이블 ';

DROP TABLE IF EXISTS `tb_search_cloud`;

CREATE TABLE `tb_search_cloud` (
  `cloud_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `search_word` varchar(45) DEFAULT NULL COMMENT '단어',
  `search_weight` int DEFAULT NULL COMMENT '가중치',
  `search_date` varchar(45) DEFAULT NULL COMMENT '검색 날짜',
  PRIMARY KEY (`cloud_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='검색어 추천을 위한 검색 빈도 저장 테이블 \n\n하루 (00:00 ~ 24:00) 사이에는 검색 데이터에 이미 해당 검색어로 데이터가 존재한다면 update를 통해 가중치를 올리는 식으로 구현 \n\n이 후 날짜가 바뀌었을 때 첫 번의 검색의 경우 그날의 날짜로 새로운 데이터를 생성 \n\n일정 시간 (ex: 7일) 의 가중치를 합산하여 전체 검색어의 무게를 정하고, 시간이 지난 부분은 데이터 삭제';

DROP TABLE IF EXISTS `tb_search_history`;

CREATE TABLE `tb_search_history` (
  `history_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `character_seq` int DEFAULT NULL COMMENT '검색한 캐릭터 번호',
  `search_history_text` varchar(100) DEFAULT NULL COMMENT '검색 문',
  `search_date` timestamp NULL DEFAULT NULL COMMENT '검색 일시',
  PRIMARY KEY (`history_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='검색 기록';


DROP TABLE IF EXISTS `tb_storage`;

CREATE TABLE `tb_storage` (
  `storage_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `character_seq` int DEFAULT NULL COMMENT '소유 캐릭터 번호',
  `storage_name` varchar(45) DEFAULT NULL COMMENT '저장 목록 명',
  `storage_public` tinyint(1) DEFAULT NULL COMMENT '공개/비공개 여부',
  `storage_created_date` timestamp NULL DEFAULT NULL COMMENT '생성 일자',
  `storage_modified_date` timestamp NULL DEFAULT NULL COMMENT '수정 일자',
  PRIMARY KEY (`storage_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='계정 생성 시 기본 설정 제목으로 하나 자동 생성, 저장목록 폴더 명을 저장하는 테이블 ';


DROP TABLE IF EXISTS `tb_stored_content`;

CREATE TABLE `tb_stored_content` (
  `stored_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `storage_seq` int DEFAULT NULL COMMENT '저장돼 있는 목록',
  `content_seq` int DEFAULT NULL COMMENT '저장된 콘텐츠',
  `character_seq` int DEFAULT NULL COMMENT '캐릭터 PK',
  PRIMARY KEY (`stored_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='저장 목록에 저장된 콘텐츠 ';


DROP TABLE IF EXISTS `tb_tag`;

CREATE TABLE `tb_tag` (
  `tag_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `content_seq` int NOT NULL COMMENT '게시물 번호',
  `tag_text` varchar(45) DEFAULT NULL COMMENT '태그 내용',
  PRIMARY KEY (`tag_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='콘텐츠에 걸려있는 태그를 저장하는 테이블';


DROP TABLE IF EXISTS `tb_user`;

CREATE TABLE `tb_user` (
  `user_seq` int NOT NULL AUTO_INCREMENT COMMENT '일련번호',
  `user_id` varchar(45) NOT NULL COMMENT '아이디',
  `user_pw` varchar(100) NOT NULL COMMENT '비밀번호',
  `user_email` varchar(45) NOT NULL COMMENT '이메일',
  `email_is_auth` tinyint(1) NOT NULL DEFAULT '0' COMMENT '이메일 인증 여부',
  `user_birth` varchar(45) DEFAULT NULL COMMENT '생년월일',
  `user_is_active` tinyint(1) NOT NULL DEFAULT '1' COMMENT '계정 활성화 여부',
  `user_created_date` timestamp NULL DEFAULT NULL COMMENT '생성 일시',
  `user_modified_date` timestamp NULL DEFAULT NULL COMMENT '수정 일시',
  `user_creatable_count` int default '1' comment '생성 가능 캐릭터 수',
  PRIMARY KEY (`user_seq`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='유저의 정보가 포함된 테이블';


