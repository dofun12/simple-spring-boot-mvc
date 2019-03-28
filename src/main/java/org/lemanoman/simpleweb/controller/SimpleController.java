package org.lemanoman.simpleweb.controller;

import org.lemanoman.simpleweb.TokenAuthenticationService;
import org.lemanoman.simpleweb.util.CommandUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SimpleController {
    @Value("${spring.application.name}")
    String appName;
 
    @GetMapping("/")
    public String homePage(HttpServletRequest request) {
        Authentication auth = TokenAuthenticationService.getAuthentication(request);
        return "home";
    }

    final String prefix = "/default";

    @GetMapping(prefix+"/teste")
    public String teste(Model model) {
        model.addAttribute("appName", appName);
        return prefix+"/teste";
    }

    @GetMapping(prefix+"/gantt")
    public String gantt(Model model) {
        model.addAttribute("appName", appName);
        return prefix+"/gantt";
    }

    @GetMapping(prefix+"/gantt/edit")
    public String ganttEdit(Model model) {
        model.addAttribute("appName", appName);
        return prefix+"/gantt_edit";
    }

    @GetMapping(prefix+"/system")
    public String getSystem(Model model) {
        model.addAttribute("systemname", CommandUtils.runCommand("uname -a") );
        model.addAttribute("diskUsage", CommandUtils.runCommand("df -h") );
        return prefix+"/system";
    }


}