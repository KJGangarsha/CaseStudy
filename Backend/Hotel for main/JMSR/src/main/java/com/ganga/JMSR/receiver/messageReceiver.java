package com.ganga.JMSR.receiver;

import java.util.concurrent.CountDownLatch;
import com.ganga.JMSR.model.suggest;

public class messageReceiver
{

    private CountDownLatch countDownLatch = new CountDownLatch(1);

    public void receiveMsg(suggest suggest) {
        System.out.println("product object is Received: " + suggest);
        countDownLatch.countDown();
    }

    public CountDownLatch getCountDownLatch()
    {
        return countDownLatch;
    }
}
