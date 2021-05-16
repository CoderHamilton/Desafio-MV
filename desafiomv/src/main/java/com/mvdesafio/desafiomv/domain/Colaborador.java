package com.mvdesafio.desafiomv.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Colaborador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;
    private String cpf;

    @OneToMany(mappedBy = "colaborador")
    private List<ItemCafeManha> itensCafeManha = new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public List<ItemCafeManha> getItensCafeManha() {
        return itensCafeManha;
    }

    public void setItensCafeManha(List<ItemCafeManha> itensCafeManha) {
        this.itensCafeManha = itensCafeManha;
    }
}
