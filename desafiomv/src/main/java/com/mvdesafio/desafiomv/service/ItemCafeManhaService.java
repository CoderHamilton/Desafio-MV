package com.mvdesafio.desafiomv.service;

import com.mvdesafio.desafiomv.domain.ItemCafeManha;
import com.mvdesafio.desafiomv.repository.ItemCafeManhaRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemCafeManhaService {

    @Autowired
    private ItemCafeManhaRepository repository;

    public List<ItemCafeManha> find() {
        return repository.findAll();
    }

    public ItemCafeManha findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> new ObjectNotFoundException(ItemCafeManha.class, "Item de café da manhã não existe"));
    }

    public List<ItemCafeManha> saveAll(List<ItemCafeManha> itensCafeManha) {
        itensCafeManha = repository.saveAll(itensCafeManha);
        return itensCafeManha;
    }
}
