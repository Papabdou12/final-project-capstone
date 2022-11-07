package com.saraya.flightmanagmentsystem;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;


@SpringBootApplication
public class FlightManagementSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(FlightManagementSystemApplication.class, args);
    }

    @Bean
    public ModelMapper getModel() {
        ModelMapper mapper = new ModelMapper();
        Converter<String, LocalDate> converter = mappingContext -> LocalDate.parse(mappingContext.getSource(),
                DateTimeFormatter.ofPattern("dd-MM-yyyy"));
        mapper.addConverter(converter);
        Converter<String, LocalTime> converter1 = mappingContext -> LocalTime.parse(mappingContext.getSource(),
                DateTimeFormatter.ofPattern(" HH:mm:ss"));
       mapper.addConverter(converter1);

        Converter<String, LocalDateTime> converter3 = mappingContext -> LocalDateTime.parse(mappingContext.getSource(),
                DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss[.SSS][.SS][.S]"));
        mapper.addConverter(converter3);
        return mapper;
    }

//    @Bean
//    public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//        config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
//        config.setAllowedMethods(Collections.singletonList("*"));
//        config.setAllowedHeaders(Collections.singletonList("*"));
//        source.registerCorsConfiguration("/**", config);
//        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter((CorsConfigurationSource) source));
//        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//        return bean;
//    }
}
