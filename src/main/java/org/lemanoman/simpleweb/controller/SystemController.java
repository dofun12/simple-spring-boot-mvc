package org.lemanoman.simpleweb.controller;

import org.lemanoman.simpleweb.util.CommandUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@RestController
@RequestMapping("/api/system")
public class SystemController {


    @GetMapping("/diskUsage")
    public String getDiskUsage() {

        return CommandUtils.runCommand("df -h");
    }



}