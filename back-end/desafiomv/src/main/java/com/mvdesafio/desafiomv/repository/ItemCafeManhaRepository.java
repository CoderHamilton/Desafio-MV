package com.mvdesafio.desafiomv.repository;

import com.mvdesafio.desafiomv.domain.ItemCafeManha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemCafeManhaRepository extends JpaRepository<ItemCafeManha, Integer> {
}
