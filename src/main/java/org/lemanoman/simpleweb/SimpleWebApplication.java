package org.lemanoman.simpleweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;

@SpringBootApplication
public class SimpleWebApplication {

    public static void main(String[] args) {
        File file = new File(".");
        System.out.println("Loading dir: "+file.getAbsolutePath());
        SpringApplication.run(SimpleWebApplication.class, args);
    }

}
