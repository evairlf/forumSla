package com.forumseila.forumseila.service;

import com.forumseila.forumseila.domain.Email;
import com.forumseila.forumseila.domain.Owner;
import com.forumseila.forumseila.enums.StatusEmail;
import com.forumseila.forumseila.repositories.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmailService {

    @Autowired
    private EmailRepository emailRepository;

    @Value("${email.from:forumseila9@gmail.com}")
    private String emailDefault;

    @Autowired
    private JavaMailSender emailSender;

    public Email sendEmail(Email email, Owner owner) {
        String text = "Number Confirmation";
        String numbersConfirmation = numbersConfirmatio();
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(emailDefault);
            message.setTo(owner.getEmail());
            message.setSubject(text);
            message.setText(numbersConfirmation);
            emailSender.send(message);

            email.setText(numbersConfirmation);
            email.setEmailTo(owner.getEmail());
            email.setStatusEmail(StatusEmail.SENT);
        } catch (MailException e){
            email.setStatusEmail(StatusEmail.ERROR);
        } finally {
            return emailRepository.save(email);
        }
    }


    private String numbersConfirmatio(){
        Random random = new Random();
        String numberString = "";
        for (int i = 0; i <= 5; i++){
           Integer number = random.nextInt(10);
           numberString += String.valueOf(number);
        }
        return numberString;
    }
}
