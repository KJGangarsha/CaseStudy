package com.ganga.JMSR;

import com.ganga.JMSR.receiver.messageReceiver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import com.ganga.JMSR.config.rabbitMqConfig;

import java.util.concurrent.TimeUnit;

@SpringBootApplication
public class JmsrApplication {

	final static String queueName = "message_queue";

	public static void main(String[] args) throws InterruptedException{

		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(rabbitMqConfig.class);
		messageReceiver receiver = (messageReceiver) ctx.getBean("receiver");
		receiver.getCountDownLatch().await(200000, TimeUnit.SECONDS);

		SpringApplication.run(JmsrApplication.class, args);
	}

}
