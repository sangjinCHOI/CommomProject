package com.ssafy.persona.search.model.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class SearchHistory {
	private int historySeq;
	private int characterSeq;
	private String searchHistoryText;
	private LocalDateTime SearchDate;
}
