package com.ssafy.persona.storage.model.entity;

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
public class Storage {
	@Id
	private int storageSeq;
	@Column
	private int characterSeq;
	@Column
	private String storageName;
	@Column
	private boolean storagePublic;
	@Column
	private LocalDateTime storageCreatedDate;
	@Column
	private LocalDateTime storageModifiedDate;
}