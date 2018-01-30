/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jcarmena.callcenter.threads;

import com.jcarmena.callcenter.controller.EmployeeController;
import java.util.Random;

/**
 *
 * @author Juan Andres Carmena
 */
public class ThreadCall extends Thread {
    private final EmployeeController employerController;
    
    public ThreadCall() {
        this.employerController = EmployeeController.getInstance();
    }
    
    @Override
    public void run() {
        Random r = new Random();
        
        int random = r.nextInt(10000-5000) + 5000;
        try {
            employerController.addEmployeeCall();
            Thread.sleep(random);
            
            employerController.removeCall();
        } catch(InterruptedException e) {}
    }
}
