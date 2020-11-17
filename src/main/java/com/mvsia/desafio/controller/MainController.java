package com.mvsia.desafio.controller;

import com.mvsia.desafio.entity.Image;
import com.mvsia.desafio.service.BanksService;
import com.mvsia.desafio.service.ImagesService;
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
    @Autowired
    private BanksService banksService;

    @PostMapping("addImage")
    public ResponseEntity<HttpStatus> addImage(@RequestParam MultipartFile file, @RequestParam Integer bank){
        try {
            imagesService.addImage(file.getBytes(), bank);
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("addBank")
    public ResponseEntity<HttpStatus> addBank(){
        try {
            banksService.addBank();
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("getBanks")
    public ResponseEntity<Image> getBanks(){
        try {
            return new ResponseEntity(banksService.getBanks(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("getImages")
    public ResponseEntity<Image> getImages(){
        try {
            return new ResponseEntity(imagesService.getAllImages(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
