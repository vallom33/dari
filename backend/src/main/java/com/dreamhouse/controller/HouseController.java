package com.dreamhouse.controller;

import com.dreamhouse.model.House;
import com.dreamhouse.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/houses")
@CrossOrigin(origins = "http://localhost:4200")
public class HouseController {
    
    @Autowired
    private HouseService houseService;
    
    // Get all houses with pagination
    @GetMapping
    public ResponseEntity<Page<House>> getAllHouses(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        
        Sort sort = sortDir.equalsIgnoreCase("desc") ? 
            Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<House> houses = houseService.getAllHouses(pageable);
        
        return ResponseEntity.ok(houses);
    }
    
    // Get house by ID
    @GetMapping("/{id}")
    public ResponseEntity<House> getHouseById(@PathVariable Long id) {
        Optional<House> house = houseService.getHouseById(id);
        return house.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }
    
    // Get featured houses
    @GetMapping("/featured")
    public ResponseEntity<List<House>> getFeaturedHouses() {
        List<House> featuredHouses = houseService.getFeaturedHouses();
        return ResponseEntity.ok(featuredHouses);
    }
    
    // Search houses
    @GetMapping("/search")
    public ResponseEntity<Page<House>> searchHouses(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String quartier,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) Integer minBedrooms,
            @RequestParam(required = false) Integer minBathrooms,
            @RequestParam(required = false) String propertyType,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        
        Sort sort = sortDir.equalsIgnoreCase("desc") ? 
            Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        
        Pageable pageable = PageRequest.of(page, size, sort);
        
        House.PropertyType type = null;
        if (propertyType != null && !propertyType.isEmpty()) {
            try {
                type = House.PropertyType.valueOf(propertyType.toUpperCase());
            } catch (IllegalArgumentException e) {
                // Invalid property type, ignore
            }
        }
        
        Page<House> houses = houseService.searchHouses(
            city, quartier, minPrice, maxPrice, minBedrooms, minBathrooms, type, pageable
        );
        
        return ResponseEntity.ok(houses);
    }
}
