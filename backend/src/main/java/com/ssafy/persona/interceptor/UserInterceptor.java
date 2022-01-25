package com.ssafy.persona.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Component
public class UserInterceptor extends WebMvcConfigurationSupport{
	
	@Autowired
	GeneralInterceptor generalInterceptor;
	
	// interceptor 영향안받는 URL 추가해야함
	@Override
	protected void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(generalInterceptor)
//		.excludePathPatterns("/user/login");
	}
}
