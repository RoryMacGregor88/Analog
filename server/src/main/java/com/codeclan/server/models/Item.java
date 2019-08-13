package com.codeclan.server.models;

import javax.persistence.*;

import com.codeclan.server.enums.Decade;
import com.codeclan.server.enums.Type;

@Entity
@Table(name="items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "type")
    private Type type;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model")
    private String model;

    @Column(name = "serial number")
    private int serialNumber;

    @Column(name = "year")
    private int year;

    @Column(name = "decade")
    private Decade decade;

    @Column(name = "price")
    private double price;

    public Item(Type type, String brand, String model, int serialNumber, int year, Decade decade, double price) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.serialNumber = serialNumber;
        this.year = year;
        this.decade = decade;
        this.price = price;
    }

    public Item() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Type getType() {
        return type;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getSerialNumber() {
        return serialNumber;
    }

    public int getYear() {
        return year;
    }

    public Decade getDecade() {
        return decade;
    }

    public double getPrice() {
        return price;
    }
}
