package com.ssafy.persona.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

//@Component	// bean 등록 annotation (주석 해제하면 생성돼서 swagger 걸러짐 왜인지는 모름)
public class UserInterceptor extends WebMvcConfigurationSupport{

	@Autowired
	GeneralInterceptor generalInterceptor;

	@Override
	protected void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(generalInterceptor)
				.excludePathPatterns("/user/login",
						"/user/valid/**",
						"/user/email/**",
						"/user",
						"/v2/api-docs",
						"/webjars/**",
						"/swagger-ui/**",
						"/swagger-resources/**");
	}	// 영향받지 않는 url
}
