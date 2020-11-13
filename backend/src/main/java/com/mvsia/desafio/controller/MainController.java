package com.mvsia.desafio.controller;

import com.mvsia.desafio.entity.Images;
import com.mvsia.desafio.service.ImagesService;
import com.sun.deploy.net.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class MainController {

    @Autowired
    private ImagesService imagesService;

    @PostMapping("addImage")
    public ResponseEntity<HttpStatus> addImage(@RequestParam MultipartFile file){
        try {
            imagesService.addImage(file.getBytes());
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("getImage")
    public ResponseEntity<Images> getImage(@RequestParam Integer id){
        try {
            return new ResponseEntity(imagesService.getImageById(id), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("getImages")
    public ResponseEntity<Images> getImages(){
        try {
            return new ResponseEntity(imagesService.getAllImages(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
