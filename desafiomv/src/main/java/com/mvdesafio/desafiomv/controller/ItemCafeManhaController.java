package com.mvdesafio.desafiomv.controller;

import com.mvdesafio.desafiomv.domain.ItemCafeManha;
import com.mvdesafio.desafiomv.service.ItemCafeManhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/itens-cafe-manha")
public class ItemCafeManhaController {

    @Autowired
    private ItemCafeManhaService service;

    @GetMapping
    public ResponseEntity<List<ItemCafeManha>> find() {
        List<ItemCafeManha> itens = service.find();
        return ResponseEntity.ok().body(itens);
    }
}
