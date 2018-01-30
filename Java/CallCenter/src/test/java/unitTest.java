/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.jcarmena.callcenter.controller.EmployeeController;
import com.jcarmena.callcenter.dispatcher.Dispatcher;
import org.junit.Test;

/**
 *
 * @author jcdesign
 */
public class unitTest {
    
    @Test
    public void testDispatcher() {
        for(int i = 0; i<30; i++) {
            Dispatcher dispatcher = new Dispatcher();
            dispatcher.dispatchCall();
        }
    }
}
