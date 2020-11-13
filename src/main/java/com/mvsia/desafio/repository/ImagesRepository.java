package com.mvsia.desafio.repository;

import com.mvsia.desafio.entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImagesRepository extends JpaRepository<Images, Integer> {
}
