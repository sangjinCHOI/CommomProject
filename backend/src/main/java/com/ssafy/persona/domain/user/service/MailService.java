package com.ssafy.persona.domain.user.service;

import com.ssafy.persona.domain.user.model.dto.MailVerifyRequest;
import com.ssafy.persona.domain.user.model.entity.Mail;

public interface MailService {
	void sendMail(Mail mail, String userId);
	int verifyEmail(MailVerifyRequest mailRequest);
	void findId(Mail mail, String userId);
	String makePw();
	void sendPw(Mail mail, String userEmail, String tmpPw);
}
