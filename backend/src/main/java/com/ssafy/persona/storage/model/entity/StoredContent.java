package com.ssafy.persona.storage.model.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class StoredContent {
	@Id
	private int storedSeq;
	@Column
	private int storageSeq;
	@Column
	private int contentSeq;
}
