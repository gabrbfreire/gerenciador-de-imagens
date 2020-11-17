package com.mvsia.desafio.service;

import com.mvsia.desafio.entity.Bank;
import com.mvsia.desafio.repository.BanksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BanksService {

    @Autowired
    BanksRepository banksRepository;

    public void addBank(){
        Bank newBank = new Bank();
        banksRepository.save(newBank);
    }

    public List<Bank> getBanks(){
        return banksRepository.findAll();
    }
}
