package org.lemanoman.simpleweb;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("org.lemanoman.simpleweb.repo")
@EntityScan({"org.lemanoman.simpleweb.model","org.lemanoman.simpleweb.controller"})
@SpringBootApplication
public class Application {

}