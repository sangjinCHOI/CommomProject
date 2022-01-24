package com.ssafy.persona.storage.model.Entity;

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
public class Storage {
	private int storageSeq;
	private int characterSeq;
	private String storageName;
	private boolean storagePublic;
	private LocalDateTime storageCreatedDate;
	private LocalDateTime storageModifiedDate;
}
