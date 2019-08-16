package com.codeclan.server.controllers;

import com.codeclan.server.models.Item;
import com.codeclan.server.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/items")
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @GetMapping(value = "/items")
    public List<Item> getAllItem() {
        return itemRepository.findAll();
    }

}
