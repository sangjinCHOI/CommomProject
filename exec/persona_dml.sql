-- user
insert into `persona`.`tb_user` 
(`user_id`, `user_pw`, `user_email`, `user_created_date`) 
values 
("kimssafy", "ebad5eafa744423d3bfb18f8fd836914dccb7d639de6349df5e1fbd49b15875e", "kp03@naver.com", now()),
("parkssafy", "ebad5eafa744423d3bfb18f8fd836914dccb7d639de6349df5e1fbd49b15875e", "kdayoung818@gmail.com", now());

-- character
insert into `persona`.`tb_character` 
(`user_seq`, `category_number`, `nickname`, `introduction`, `character_created_date`, `alarm_allow`, `like_alarm`, `reply_alarm`, `follow_alarm`, `modify_alarm`) 
values 
(1, 24, "개발왕", "안녕하세요!!!개발왕입니다.", now(), true, true, true, true, true),
(2, 4, "맛집탐방왕", "안녕하세요!!!맛집탐방왕입니다.", now(), true, true, true, true, true);


-- content
insert into `persona`.`tb_content` 
(`character_seq`, `category_number`, `content_text`, `content_is_public`, `content_is_media`, `content_created_date`) 
values 
(1, 24, "오늘부터 새로운 프로젝트 시작했습니다.!", true, true, now()),
(1, 24, "스프링은 해도해도 어렵네요 ㅠㅠㅠ ", true, true, now()),
(2, 4, "충무로 맛집 추천해주세요~!", true, true, now()),
(2, 4, "을지로 <부타이제2막> 마제소바, 소바후토마키 맛집입니다!!!", true, true, now()),
(2, 4, "강남 맛집 추천해주세요~!", true, true, now()),
(2, 4, "성수 <르프리크> 치킨수제버거 맛있습니당 추천해요~!", true, true, now()),
(2, 4, "이태원 맛집 추천해주세요~!!!!", true, true, now()),
(2, 4, "", true, true, now()),
(2, 4, "성수 맛집 추천해주세요~!", true, true, now()),


-- content_like
insert into `persona`.`tb_content_like` 
(`content_seq`, `character_seq`) 
values 
(1, 2),
(2, 2),
(3, 1),
(4, 1);

-- reply
insert into `persona`.`tb_reply` 
(`content_seq`, `character_seq`, `reply_text`, `reply_created_date`) 
values 
(1, 2, "화이팅입니다!!!", now()),
(4, 1, "맛있어 보이네요ㅎㅎ", now());

-- storage
insert into `persona`.`tb_storage` 
(`character_seq`, `storage_name`, `storage_public`, `storage_created_date`) 
values 
(1, "자바", true, now()),
(1, "파이썬", true, now()),
(2, "성수맛집", true, now()),
(2, "을지로맛집", true, now()),
(2, "이태원맛집", true, now());

-- tag
insert into `persona`.`tb_tag` (content_seq, tag_text) values (1, "프로젝트") , (1, "스프링");
insert into `persona`.`tb_tag` (content_seq, tag_text) values (3, "충무로") , (3, "맛집"), (3, "추천");
insert into `persona`.`tb_tag` (content_seq, tag_text) values (4, "을지로") , (4, "맛집"), (4, "부타이제2막");
insert into `persona`.`tb_tag` (content_seq, tag_text) values (6, "성수") , (6, "맛집"), (6, "르프리크");

-- character_category
INSERT INTO `persona`.`tb_character_category` 
(`character_category_number`, `character_category_name`, `character_category_is_active`)
VALUES 
('1', '전자제품', '1'), 
('2', '문구', '1'), 
('3', '사진/카메라', '1'), 
('4', '맛집', '1'), 
('5', '여행', '1'), 
('6', '이색스포츠', '1'), 
('7', '만화', '1'), 
('8', '하드웨어', '1'), 
('9', '비트코인', '1'), 
('10', '발레', '1'), 
('11', '런닝', '1'), 
('12', '부동산', '1'), 
('13', '테크', '1'), 
('14', '명품', '1'), 
('15', 'mbti', '1'), 
('16', '낚시', '1'), 
('17', '연극/뮤지컬', '1'), 
('18', '댄스', '1'),
('19', '인터넷방송', '1'), 
('20', '예능', '1'), 
('21', '드라마', '1'), 
('22', '보드게임', '1'), 
('23', '게임', '1'), 
('24', '개발', '1'), 
('25', '요리', '1'), 
('26', '운동', '1'), 
('27', '축구', '1'), 
('28', '헬스', '1'), 
('29', '야구', '1'), 
('30', '아이돌', '1'), 
('31', '음악', '1'), 
('32', '힙합', '1'), 
('33', '밴드', '1'), 
('34', '피아노', '1'), 
('35', '영화', '1'), 
('36', '주식', '1'), 
('37', '등산', '1'), 
('38', '토이', '1'), 
('39', '판타지', '1'), 
('40', '소설', '1'), 
('41', '다이어리', '1'), 
('42', '반려동물', '1'), 
('43', '식물', '1'), 
('0', '미정', '1');

-- search_cloud
INSERT INTO `persona`.`tb_search_cloud` 
(`search_word`, `search_weight`, `search_date`)
 VALUES 
 ('셀피', '32', '2022-02-18'),
 ('페르소나', '40', '2022-02-18'),
 ('올림픽', '120', '2022-02-18'),
 ('스케이팅', '90', '2022-02-18'),
 ('부캐', '130', '2022-02-18'),
 ('본캐', '7', '2022-02-18'),
 ('덕질', '23', '2022-02-18'),
 ('persona', '47', '2022-02-18');
 
 -- achievement
INSERT INTO `persona`.`tb_achievement`
(`achievement_name`, `achievement_description`, `achievement_condition`, `achievement_type`, `achievement_level`, `achievement_is_active`, `achievement_created_date`)
VALUES
('그만좀 알려줘!', '알림을 많이 쌓아보세요', '쌓여있는 알람 개수가 10개 이상일 때 달성', 1, 1, 1, now()),
('저장목록을 지배하는 자', '저장목록을 많이 만들어보세요.', '캐릭터 저장목록 개수가 5개 이상일 때 달성', 1, 1, 1, now()),
('핫이슈', '실시간 검색어 순위를 확인하세요.', '실시간 검색어 1위를 검색(클릭)하면 달성', 1, 1, 1, now()),
('콩은 까야 제맛', '특정 날짜에 접속해보세요.', '22일에 접속하면 달성', 1, 1, 1, now()),
('저장목록 보고 갈래?', '저장목록을 구경해보세요.', '다른 유저의 저장목록에 들어가면 달성', 1, 1, 1, now()),
('좋아해요', '네가 좋아! 너무 좋아!', '팔로우 1명 달성', 1, 1, 1, now()),
('마당발', '이 시대 진정한 마당발', '팔로우 1000명 달성', 1, 1, 1, now()),
('1호 팬', '내 1호 팬은 누구?', '팔로워 1명 달성', 1, 1, 1, now()),
('인기쟁이', '너도 나도 좋아하는 인기쟁이', '팔로워 1000명 달성', 1, 1, 1, now()),
('인플루언서', '다들 내 이름 들어봤지?', '팔로워 10,000명 달성', 1, 1, 1, now()),
('슈퍼스타', '페르소나 슈스는 바로 나!', '팔로워 1,000,000명 달성', 1, 1, 1, now()),
('나 홀로 페르소나', '크리스마스는 페르소나와 함께!', '크리스마스에 접속하면 달성', 1, 1, 1, now()),
('해피뉴이어', '새해 첫 날 접속', '1월 1일 접속하면 달성', 1, 1, 1, now()),
('내가 임마! 느그 운영자랑', '어저께 으! 친구도 하고 다 했으!.', '운영자 팔로워 하기', 1, 1, 1, now()),
('첫 돌', '첫 번째 생일을 축하해요.', '캐릭터가 생성된지 1년이상이면 달성 ', 1, 1, 1, now()),
('흑역사', '흑역사인 게시물이 있나요?', '게시물을 삭제 시 달성', 1, 1, 1, now()),
('카페인이 필요해', '밥먹고 나른한데 너는 뭐하니?', '14시에서 15시 사이에 게시글 작성', 1, 1, 1, now()),
('밥은 먹고 다니냐?', '점심시간에 밥 안 드시고 뭐하시나요?', '11시에서 1시 사이에 게시글 작성 시 달성', 1, 1, 1, now()),
('묻고 더블로 가!', '게시글도 더블로 가!', '하루에 게시글 2개 이상 작성 시 달성 ', 1, 1, 1, now()),
('드루와 드루와', '매일 매일 드루와~', '2일 연속 출석시 달성', 1, 1, 1, now()),
('살아있네~', '삼일동안 죽은 줄 알았네~', '삼일 만에 접속 시 달성 ', 1, 1, 1, now()),
('누구냐, 너!', '일주일만에 까먹었어요.', '일주일만에 접속 시 달성 ', 1, 1, 1, now()),
('사랑과 정의의 이름으로', '널 용서하지 않겠다!', '부정 게시글 신고시 달성', 1, 1, 1, now()),
('내 이름은 코! 난 탐정이죠!', '갈 때 가더라도 한 줄 소개정돈 괜찮잖아', '한 줄 소개 작성 시 달성', 1, 1, 1, now()),
('우리는 깐부잖아', '깐부끼리는 니꺼 내꺼가 없는거야', '다른 사람 게시물 저장 시 달성', 1, 1, 1, now());

-- achievement file
INSERT INTO `persona`.`tb_file` 
(`file_name`, `file_size`, `file_path`, `file_type`, `relation_tb`, `relation_seq`, `file_registered_date`, `file_is_active`) 
VALUES 
('1.png', '14184', '/files/achievements/', '2', 'tb_achievement', '1', '2022-02-16 11:00:00', '1'),
('2.png', '16542', '/files/achievements/', '2', 'tb_achievement', '2', '2022-02-16 11:00:00', '1'),
('3.png', '12044', '/files/achievements/', '2', 'tb_achievement', '3', '2022-02-16 11:00:00', '1'),
('4.png', '14945', '/files/achievements/', '2', 'tb_achievement', '4', '2022-02-16 11:00:00', '1'),
('5.png', '16456', '/files/achievements/', '2', 'tb_achievement', '5', '2022-02-16 11:00:00', '1'),
('6.png', '12412', '/files/achievements/', '2', 'tb_achievement', '6', '2022-02-16 11:00:00', '1'), 
('7.png', '14521', '/files/achievements/', '2', 'tb_achievement', '7', '2022-02-16 11:00:00', '1'),
('8.png', '6602', '/files/achievements/', '2', 'tb_achievement', '8', '2022-02-16 11:00:00', '1'),
('9.png', '6871', '/files/achievements/', '2', 'tb_achievement', '9', '2022-02-16 11:00:00', '1'),
('10.png', '7836', '/files/achievements/', '2', 'tb_achievement', '10', '2022-02-16 11:00:00', '1'),
('11.png', '6210', '/files/achievements/', '2', 'tb_achievement', '11', '2022-02-16 11:00:00', '1'),
('12.png', '16390', '/files/achievements/', '2', 'tb_achievement', '12', '2022-02-16 11:00:00', '1'),
('13.png', '18012', '/files/achievements/', '2', 'tb_achievement', '13', '2022-02-16 11:00:00', '1'),
('14.png', '14078', '/files/achievements/', '2', 'tb_achievement', '14', '2022-02-16 11:00:00', '1'),
('15.png', '15363', '/files/achievements/', '2', 'tb_achievement', '15', '2022-02-16 11:00:00', '1'),
('16.png', '16602', '/files/achievements/', '2', 'tb_achievement', '16', '2022-02-16 11:00:00', '1'),
('17.png', '16723', '/files/achievements/', '2', 'tb_achievement', '17', '2022-02-16 11:00:00', '1'),
('18.png', '10200', '/files/achievements/', '2', 'tb_achievement', '18', '2022-02-16 11:00:00', '1'),
('19.png', '10257', '/files/achievements/', '2', 'tb_achievement', '19', '2022-02-16 11:00:00', '1'),
('20.png', '8783', '/files/achievements/', '2', 'tb_achievement', '20', '2022-02-16 11:00:00', '1'),
('21.png', '8388', '/files/achievements/', '2', 'tb_achievement', '21', '2022-02-16 11:00:00', '1'),
('22.png', '13228', '/files/achievements/', '2', 'tb_achievement', '22', '2022-02-16 11:00:00', '1'),
('23.png', '5804', '/files/achievements/', '2', 'tb_achievement', '23', '2022-02-16 11:00:00', '1'),
('24.png', '15015', '/files/achievements/', '2', 'tb_achievement', '24', '2022-02-16 11:00:00', '1'),
('25.png', '12551', '/files/achievements/', '2', 'tb_achievement', '25', '2022-02-16 11:00:00', '1');