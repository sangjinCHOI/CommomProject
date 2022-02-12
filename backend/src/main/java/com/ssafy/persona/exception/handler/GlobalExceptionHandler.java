package com.ssafy.persona.exception.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.ssafy.persona.exception.model.dto.ErrorResponse;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	public static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
	@ExceptionHandler
	protected ResponseEntity<ErrorResponse> handleCustomException(CustomException e) {
		logger.error("handleCustomException throw CustomException : {}", e.getErrorCode());
		return ErrorResponse.toResponseEntity(e.getErrorCode());
	}
}
