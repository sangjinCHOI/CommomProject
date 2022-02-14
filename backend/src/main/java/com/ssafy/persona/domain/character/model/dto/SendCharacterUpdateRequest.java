package com.ssafy.persona.domain.character.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class SendCharacterUpdateRequest {
    private int characterSeq;
    private String nickname;
    private String introduction;
    private int representativeAchievement;
}
