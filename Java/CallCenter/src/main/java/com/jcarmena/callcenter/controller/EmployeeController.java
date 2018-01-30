/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jcarmena.callcenter.controller;

import com.jcarmena.callcenter.model.Employee;

/**
 *
* @author Juan Andres Carmena
 */
public class EmployeeController {
    private static EmployeeController instance = null;
   
    private final Employee operator;
    private final Employee supervisor;
    private final Employee director;
   
    protected EmployeeController() {
        operator = new Employee();
        supervisor = new Employee();
        director = new Employee();
    }
   
    public static EmployeeController getInstance() {
        if(instance == null) {
           instance = new EmployeeController();
        }
        return instance;
    }

    public void addEmployeeCall() {

        if(operator.getCounter() < 10) {
            operator.sumCounter();
        } else if(supervisor.getCounter() < 10) {
            supervisor.sumCounter();
        } else if(director.getCounter() < 10) {
            director.sumCounter();
        }


        System.out.println("|----------------------------");
        System.out.println("employer operator "+operator.getCounter());
        System.out.println("employer supervisor "+supervisor.getCounter());
        System.out.println("employer director "+director.getCounter());
        System.out.println("----------------------------|");


    }
   
    public void removeCall() {
       
        if(director.getCounter() > 0) {
            director.disCounter();
        } else if(supervisor.getCounter() > 0) {
            supervisor.disCounter();
        } else if(operator.getCounter() > 0) {
            operator.disCounter();
        }
       
   }
   
   
}
