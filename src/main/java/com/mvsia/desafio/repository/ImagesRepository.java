package com.mvsia.desafio.repository;

import com.mvsia.desafio.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImagesRepository extends JpaRepository<Image, Integer> {
}
