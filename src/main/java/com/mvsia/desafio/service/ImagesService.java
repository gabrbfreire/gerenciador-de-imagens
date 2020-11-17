package com.mvsia.desafio.service;

import com.mvsia.desafio.entity.Image;
import com.mvsia.desafio.repository.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagesService {

    @Autowired
    private ImagesRepository repository;

    public void addImage(byte[] file, Integer bank){
        Image image = new Image();
        image.setImage(file);
        image.setBank(bank);
        repository.save(image);
    }

    public List<Image> getAllImages(){
        return repository.findAll();
    }

    public Optional<Image> getImageById(Integer id){
        return repository.findById(id);
    }
}
