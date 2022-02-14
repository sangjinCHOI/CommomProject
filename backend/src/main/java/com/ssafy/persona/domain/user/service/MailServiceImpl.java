package com.ssafy.persona.domain.user.service;

import java.util.Random;

import com.ssafy.persona.domain.user.handler.MailHandler;
import com.ssafy.persona.domain.user.mapper.MailMapper;
import com.ssafy.persona.domain.user.model.entity.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.ssafy.persona.domain.user.model.dto.MailVerifyRequest;

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
	
	public void sendMail(Mail mail, String userId) {
		
		String authKey = getKey(16);
		
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
					"<a href='http://i6a506.p.ssafy.io//user/email/verify?userId="
					+ userId 
					+ "&authText="
					+ authKey
					+"'>인증하기</a> <br /> ";
			mailHandler.setText(imgContent, true);	
			
			mailHandler.send();
			System.out.println(mailMapper.countAuth(userId));
			if(mailMapper.countAuth(userId) > 0) {
				mailMapper.updateAuthNumber(userId, authKey);
				return ;
			}
			mailMapper.addAuthNumber(userId, authKey);
		} catch (Exception e) {
			e.printStackTrace();
		} 
	
	}

	@Override
	public int verifyEmail(MailVerifyRequest mailRequest) {
		
		return (mailMapper.verifyEmail(mailRequest));
	}

	@Override
	public void findId(Mail mail, String userEmail) {

		try {
			MailHandler mailHandler = new MailHandler(mailSender);

			// 받는 이메일 설정
			mailHandler.setTo(userEmail);

			// 메일 제목
			mailHandler.setSubject("Persona 아이디 찾기 결과입니다.");

			String imgContent = "<img src=\"https://ifh.cc/g/zKpgxC.png\" alt=\"img\" /><br/>";
	
			imgContent = "";
			imgContent += mailMapper.getIdtoEmail(userEmail);
			
			mailHandler.setText(imgContent, true);	
			
			mailHandler.send();

		} catch (Exception e) {
			e.printStackTrace();
		} 
	}

	@Override
	public String makePw() {
		return (getKey(16));
	}

	@Override
	public void sendPw(Mail mail, String userEmail, String tmpPw) {
		try {
			MailHandler mailHandler = new MailHandler(mailSender);

			// 받는 이메일 설정
			mailHandler.setTo(userEmail);

			// 메일 제목
			mailHandler.setSubject("Persona 임시 비밀번호입니다.");

			String imgContent = "<img src=\"https://ifh.cc/g/zKpgxC.png\" alt=\"img\" /><br/>";
	
			imgContent = "";
			imgContent += tmpPw;
			
			mailHandler.setText(imgContent, true);	
			
			mailHandler.send();

		} catch (Exception e) {
			e.printStackTrace();
		} 
	}
	
	
}
