package com.mvdesafio.desafiomv.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class ItemCafeManha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String item;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "colaborador_id")
    private Colaborador colaborador;

    public ItemCafeManha() {}
    
    public ItemCafeManha(Integer id, String item) {
        this.id = id;
        this.item = item;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Colaborador getColaborador() {
        return colaborador;
    }

    public void setColaborador(Colaborador colaborador) {
        this.colaborador = colaborador;
    }
}
