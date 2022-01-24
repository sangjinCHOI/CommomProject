package com.ssafy.persona.storage.model.Entity;

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
public class StoredContent {
	private int storedSeq;
	private int storageSeq;
	private int contentSeq;
}
