package com.mvsia.desafio.service;

import com.mvsia.desafio.entity.Images;
import com.mvsia.desafio.repository.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class ImagesService {

    @Autowired
    private ImagesRepository repository;

    public void addImage(byte[] file){
        Images image = new Images();
        image.setImage(file);
        repository.save(image);
    }

    public List<Images> getAllImages(){
        return repository.findAll();
    }

    public Optional<Images> getImageById(Integer id){
        return repository.findById(id);
    }
}
