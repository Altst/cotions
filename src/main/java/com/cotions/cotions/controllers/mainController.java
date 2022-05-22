package com.cotions.cotions.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class mainController{

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "Cotions");
        return "home";
    }
    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        return "dashboard";
    }
}