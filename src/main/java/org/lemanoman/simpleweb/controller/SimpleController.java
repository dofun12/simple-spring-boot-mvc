package org.lemanoman.simpleweb.controller;

import org.lemanoman.simpleweb.util.CommandUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SimpleController {
    @Value("${spring.application.name}")
    String appName;
 
    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("appName", appName);
        return "home";
    }

    @GetMapping("/teste")
    public String teste(Model model) {
        model.addAttribute("appName", appName);
        return "teste";
    }

    @GetMapping("/gantt")
    public String gantt(Model model) {
        model.addAttribute("appName", appName);
        return "gantt";
    }

    @GetMapping("/system")
    public String getSystem(Model model) {
        model.addAttribute("systemname", CommandUtils.runCommand("uname -a") );
        model.addAttribute("diskUsage", CommandUtils.runCommand("df -h") );
        return "system";
    }


}