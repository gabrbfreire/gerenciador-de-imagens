package com.mvsia.desafio.entity;

import javax.persistence.*;

@Entity(name = "banks")
public class Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public Integer getId() {
        return id;
    }
}
