package com.ssafy.persona.exception.handler;

import com.ssafy.persona.exception.model.ErrorCode;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CustomException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private final ErrorCode errorCode;
}
