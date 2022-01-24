package com.ssafy.persona.search.model.entity;

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
public class SearchCloud {
	private int cloudSeq;
	private String searchWord;
	private int searchWeight;
	private String searchDate;
}
