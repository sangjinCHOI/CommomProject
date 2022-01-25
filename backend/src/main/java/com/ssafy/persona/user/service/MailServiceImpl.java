package com.ssafy.persona.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.ssafy.persona.user.mapper.MailMapper;
import com.ssafy.persona.user.model.entity.Mail;

@Component
public class MailServiceImpl implements MailService{

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private MailMapper mailMapper;

	public void sendMail(Mail mail) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(mailMapper.getEmail(mail.getUserSeq()));
		System.out.println(mailMapper.getEmail(mail.getUserSeq()));
		message.setSubject("title!!");
		
		message.setText(mail.getMailText());
		
		mailSender.send(message);
	}
}
