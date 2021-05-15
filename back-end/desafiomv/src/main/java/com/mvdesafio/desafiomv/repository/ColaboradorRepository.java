package com.mvdesafio.desafiomv.repository;

import com.mvdesafio.desafiomv.domain.Colaborador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColaboradorRepository extends JpaRepository<Colaborador, Integer> {

    Colaborador findByCpf(String cpf);
}
