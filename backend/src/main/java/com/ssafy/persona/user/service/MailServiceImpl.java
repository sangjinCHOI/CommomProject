package com.ssafy.persona.user.service;

import java.io.IOException;
import java.util.Random;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.ssafy.persona.user.handler.MailHandler;
import com.ssafy.persona.user.mapper.MailMapper;
import com.ssafy.persona.user.model.dto.MailVerifyRequest;
import com.ssafy.persona.user.model.entity.Mail;
import com.ssafy.persona.user.model.entity.User;

@Component
public class MailServiceImpl implements MailService{

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private MailMapper mailMapper;

    //인증키 생성
    private String getKey(int size) {
        return getAuthCode(size);
    }

    //인증코드 난수 발생
    private String getAuthCode(int size) {
        Random random = new Random();
        StringBuffer buffer = new StringBuffer();
        int num = 0;

        while(buffer.length() < size) {
            num = random.nextInt(10);
            buffer.append(num);
        }

        return buffer.toString();
    } 
	
	public void sendMail(Mail mail, User user) {
		
		String authKey = getKey(8);
		
		System.out.println(authKey);
		
		try {
			MailHandler mailHandler = new MailHandler(mailSender);
			
			// 받는 이메일 설정
			mailHandler.setTo(mailMapper.getEmail(mail.getUserSeq()));

			// 메일 제목
			mailHandler.setSubject("Persona 인증 메일입니다.");
			
			// 메일 이미지 추가
			String imgContent = "<img src=\"https://ifh.cc/g/zKpgxC.png\" alt=\"img\" /><br/>";
			
			// EC2 올리면 서버 설정필요
			imgContent = 
					"<a href='http://localhost:8080/user/mail/verify?userId="
					+ user.getUserId() 
					+ "&authText="
					+ authKey
					+"'>인증하기</a> <br /> ";
			
			mailHandler.setText(imgContent, true);
			
			mailMapper.addAuthNumber(user.getUserId(), authKey);
			
			mailHandler.send();
		} catch (Exception e) {
			e.printStackTrace();
		} 
	
	}

	@Override
	public int verifyEmail(MailVerifyRequest mailRequest) {
		
		return (mailMapper.verifyEmail(mailRequest));
	}
}
