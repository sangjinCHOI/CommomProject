package com.ssafy.persona.user.service;

import com.ssafy.persona.user.model.dto.MailVerifyRequest;
import com.ssafy.persona.user.model.entity.Mail;
import com.ssafy.persona.user.model.entity.User;

public interface MailService {
	void sendMail(Mail mail, String userId);
	int verifyEmail(MailVerifyRequest mailRequest);
	void findId(Mail mail, String userId);
}
