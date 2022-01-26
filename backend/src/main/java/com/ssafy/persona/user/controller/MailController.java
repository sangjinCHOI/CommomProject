package com.ssafy.persona.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.persona.user.model.entity.Mail;
import com.ssafy.persona.user.service.MailService;

@Controller
@RestController
@RequestMapping("/mail")
public class MailController {
	
	@Autowired
	private MailService mailService;
	
	@GetMapping("/send")
	public Mail sendTest(int userSeq) {
		Mail mail = new Mail();
		
		mail.setUserSeq(userSeq);
		mail.setMailText("hello!!");
		
		mailService.sendMail(mail);
		
		return mail;
	}
}
