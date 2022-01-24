package com.ssafy.persona.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.persona.user.mapper.UserMapper;
import com.ssafy.persona.user.model.dto.UserGetResponse;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserMapper userMapper;
	
	@Override
	public UserGetResponse getUser(int userSeq) {
		// user가 없다면
		if(userMapper.seqIsValid(userSeq) < 1)
			return (null);
		// 해당 user 있음
		return (userMapper.getUser(userSeq));
	}

	@Override
	public boolean userValid(String userId) {
		if(userMapper.userValid(userId) > 0) return (true);
		return (false);
	}

}
