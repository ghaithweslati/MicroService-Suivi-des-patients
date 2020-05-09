package org.glsid;

import org.glsid.dao.DossierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableEurekaClient
@SpringBootApplication
@EnableFeignClients
public class Test  {
	
	@Autowired
	DossierRepository dossierRepository;
	

	public static void main(String[] args) {
		SpringApplication.run(Test.class, args);
		
		
	}

}
