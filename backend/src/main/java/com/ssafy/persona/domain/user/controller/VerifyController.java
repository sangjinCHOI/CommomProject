package com.ssafy.persona.domain.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

import com.ssafy.persona.domain.user.model.dto.MailVerifyRequest;
import com.ssafy.persona.domain.user.service.MailService;
import com.ssafy.persona.domain.user.service.UserService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@Controller
@RequestMapping("/verify")
public class VerifyController {
	@Autowired
	UserService userService;

	@Autowired
	MailService mailService;

	// 이메일에서 인증 눌렀을 때 반응
	@GetMapping("")
	public RedirectView verifyEmail(MailVerifyRequest mailRequest) {

		if (mailService.verifyEmail(mailRequest) > 0) {
			// 허가 받았다고 user 업데이트 해야함
			userService.emailIsValid(mailRequest.getUserId());
			System.out.println("성공");
			RedirectView redirectView = new RedirectView();
			redirectView.setUrl("http://i6a506.p.ssafy.io/");
			return redirectView;
		} else
			System.out.println("실패");

		RedirectView redirectView = new RedirectView();
		redirectView.setUrl("http://i6a506.p.ssafy.io/error/conflict");
		return redirectView;
	}
}
