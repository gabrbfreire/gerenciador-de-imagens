package com.mvsia.desafio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GreetingController {

    @GetMapping(value = "")
    public String index(){
        return "index";
    }
}
