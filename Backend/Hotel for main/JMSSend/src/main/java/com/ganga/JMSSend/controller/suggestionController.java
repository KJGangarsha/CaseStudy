package com.ganga.JMSSend.controller;

import com.ganga.JMSSend.config.rabbitMqConfig;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.bind.annotation.*;
import com.ganga.JMSSend.model.suggestion;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/suggestion")
public class suggestionController  {

    final static String queueName = "message_queue";

    @PostMapping("/post")
    private suggestion getPost(@RequestBody suggestion suggest)
    {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(rabbitMqConfig.class);
        RabbitTemplate rabbitTemplate = (RabbitTemplate) ctx.getBean("rabbitTemplate");
        suggest.setMailId(suggest.getMailId());
        suggest.setName(suggest.getName());
        suggest.setSuggestion(suggest.getSuggestion());
        rabbitTemplate.convertAndSend(queueName, suggest);
        System.out.println("product object has been sent successfully to Queue");
//        ctx.close();
        return suggest;
    }

}

