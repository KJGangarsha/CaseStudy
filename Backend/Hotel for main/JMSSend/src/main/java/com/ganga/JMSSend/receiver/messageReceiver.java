package com.ganga.JMSSend.receiver;

import java.util.concurrent.CountDownLatch;
import com.ganga.JMSSend.model.suggestion;

public class messageReceiver
{

    private CountDownLatch countDownLatch = new CountDownLatch(1);

    public void receiveMsg(suggestion suggest) {
        System.out.println("product object is Received: " + suggest);
        countDownLatch.countDown();
    }

    public CountDownLatch getCountDownLatch()
    {
        return countDownLatch;
    }
}
