package com.mvsia.desafio.repository;

import com.mvsia.desafio.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BanksRepository extends JpaRepository<Bank, Integer> {
}
