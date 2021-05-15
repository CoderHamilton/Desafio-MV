package com.mvdesafio.desafiomv.controller;

import com.mvdesafio.desafiomv.domain.Colaborador;
import com.mvdesafio.desafiomv.service.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/colaboradores")
public class ColaboradorController {

    @Autowired
    private ColaboradorService service;

    @GetMapping
    public ResponseEntity<List<Colaborador>> find() {
        List<Colaborador> colaboradores = service.find();
        return ResponseEntity.ok().body(colaboradores);
    }

    @PostMapping
    public ResponseEntity<Object> insert(@RequestBody Colaborador colaborador) {
        if (service.validarSeCpfJaCadastrado(colaborador.getCpf())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("CPF já cadastrado");
        }
        colaborador = service.insert(colaborador);
        return ResponseEntity.status(HttpStatus.CREATED).body(colaborador);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@RequestBody Colaborador colaborador, @PathVariable Integer id) {
        service.update(colaborador);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
