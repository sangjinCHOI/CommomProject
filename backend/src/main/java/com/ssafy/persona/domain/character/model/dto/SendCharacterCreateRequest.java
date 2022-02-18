package com.ssafy.persona.domain.character.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class SendCharacterCreateRequest {
    private int userSeq;
    private int categoryNumber;
    private String nickname;
    private String introduction;
}
