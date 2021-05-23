package com.ganga.JMSSend;

import com.ganga.JMSSend.config.rabbitMqConfig;
//import com.ganga.JMSSend.receiver.messageReceiver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.concurrent.TimeUnit;

@SpringBootApplication
@EnableDiscoveryClient
public class JmsSendApplication {

	public static void main(String[] args) throws InterruptedException {
		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(rabbitMqConfig.class);
		/*messageReceiver receiver = (messageReceiver) ctx.getBean("receiver");
		receiver.getCountDownLatch().await(200000, TimeUnit.SECONDS);*/
		SpringApplication.run(JmsSendApplication.class, args);
	}

}
