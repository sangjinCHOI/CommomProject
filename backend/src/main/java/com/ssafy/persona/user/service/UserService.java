package com.ssafy.persona.user.service;

import com.ssafy.persona.user.model.dto.UserGetResponse;

public interface UserService {
	public UserGetResponse getUser(int user_seq);
}
