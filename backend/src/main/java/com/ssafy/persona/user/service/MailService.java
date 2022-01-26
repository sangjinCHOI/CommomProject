package com.ssafy.persona.user.service;

import com.ssafy.persona.user.model.dto.MailVerifyRequest;
import com.ssafy.persona.user.model.entity.Mail;
import com.ssafy.persona.user.model.entity.User;

public interface MailService {
	void sendMail(Mail mail, User user);
	int verifyEmail(MailVerifyRequest mailRequest);
}
