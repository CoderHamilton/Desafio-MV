package com.mvdesafio.desafiomv.init;

import com.mvdesafio.desafiomv.domain.ItemCafeManha;
import com.mvdesafio.desafiomv.service.ItemCafeManhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CargaBancoDeDados implements ApplicationRunner {

    @Autowired
    private ItemCafeManhaService itemCafeManhaService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        ItemCafeManha item1 = new ItemCafeManha(null, "Pão");
        ItemCafeManha item2 = new ItemCafeManha(null, "Café");
        ItemCafeManha item3 = new ItemCafeManha(null, "Mortadela");
        ItemCafeManha item4 = new ItemCafeManha(null, "Queijo");
        ItemCafeManha item5 = new ItemCafeManha(null, "Suco");

        itemCafeManhaService.saveAll(List.of(item1, item2, item3, item4, item5));
    }
}