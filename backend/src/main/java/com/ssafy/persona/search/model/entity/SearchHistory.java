package com.ssafy.persona.search.model.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class SearchHistory {
	@Id
	private int historySeq;
	@Column
	private int characterSeq;
	@Column
	private String searchHistoryText;
	@Column
	private LocalDateTime SearchDate;
}
