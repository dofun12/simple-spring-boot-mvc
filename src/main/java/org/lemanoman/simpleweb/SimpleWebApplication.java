package org.lemanoman.simpleweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.concurrent.ExecutorService;

@SpringBootApplication
public class SimpleWebApplication {

	public static void main(String[] args) {
		Thread thread = new Thread(new TesteRunnable());
		thread.start();

		SpringApplication.run(SimpleWebApplication.class, args);
	}

}
