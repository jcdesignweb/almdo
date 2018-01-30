/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jcarmena.callcenter.model;

/**
 *
* @author Juan Andres Carmena
 */
public class Employee {

    // call counter
    private int counter = 0;
    
    public int getCounter() {
        return counter;
    }

    public void setCounter(int counter) {
        this.counter = counter;
    }
    
    // add one
    public void sumCounter() {
        this.counter++;
    }
    
    // remove one
    public void disCounter() {
        this.counter--;
    }
    
}
