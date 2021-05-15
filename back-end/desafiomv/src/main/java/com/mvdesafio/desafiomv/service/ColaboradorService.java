package com.mvdesafio.desafiomv.service;

import com.mvdesafio.desafiomv.domain.Colaborador;
import com.mvdesafio.desafiomv.domain.ItemCafeManha;
import com.mvdesafio.desafiomv.repository.ColaboradorRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColaboradorService {

    @Autowired
    private ColaboradorRepository repository;

    @Autowired
    private ItemCafeManhaService itemCafeManhaService;

    public List<Colaborador> find() {
        return repository.findAll();
    }

    public Colaborador findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> new ObjectNotFoundException(Colaborador.class, "Colaborador não existe"));
    }

    public Colaborador findByCpf(String cpf) {
        return repository.findByCpf(cpf);
    }

    public Colaborador insert(Colaborador colaborador) {
        validarSeCpfJaCadastrado(colaborador.getCpf());
        colaborador.setId(null);
        colaborador = repository.save(colaborador);
        for (ItemCafeManha item : colaborador.getItensCafeManha()) {
            item.setColaborador(colaborador);
        }
        colaborador.setItensCafeManha(itemCafeManhaService.saveAll(colaborador.getItensCafeManha()));
        return colaborador;
    }

    public boolean validarSeCpfJaCadastrado(String cpf) {
        Colaborador colaborador = findByCpf(cpf);
        return colaborador != null;
    }

    public Colaborador update(Colaborador colaborador) {
         Colaborador colaboradorNew = findById(colaborador.getId());
         return repository.save(colaboradorNew);
    }

    private void updateData(Colaborador colaboradorNew, Colaborador colaborador) {
        colaboradorNew.setItensCafeManha(colaborador.getItensCafeManha());
    }

    public void delete(Integer colaboradorId) {
        findById(colaboradorId);
        repository.deleteById(colaboradorId);
    }
}
