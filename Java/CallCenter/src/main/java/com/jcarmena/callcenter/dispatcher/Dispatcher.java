/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jcarmena.callcenter.dispatcher;

import com.jcarmena.callcenter.threads.ThreadCall;

/**
 *
 * @author Juan Andres Carmena
 */
public class Dispatcher  {
    
    public void dispatchCall() {
        
        ThreadCall caller = new ThreadCall();
        caller.start();
    }
    
    
}
