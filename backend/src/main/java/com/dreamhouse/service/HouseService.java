package com.dreamhouse.service;

import com.dreamhouse.model.House;
import com.dreamhouse.repository.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HouseService {
    
    @Autowired
    private HouseRepository houseRepository;
    
    public Page<House> getAllHouses(Pageable pageable) {
        return houseRepository.findByStatus(House.PropertyStatus.FOR_SALE, pageable);
    }
    
    public Optional<House> getHouseById(Long id) {
        return houseRepository.findById(id);
    }
    
    public List<House> getFeaturedHouses() {
        return houseRepository.findByFeaturedTrueOrderByCreatedAtDesc();
    }
    
    public Page<House> getHousesByCity(String city, Pageable pageable) {
        return houseRepository.findByCityIgnoreCase(city, pageable);
    }
    
    public Page<House> getHousesByCityAndQuartier(String city, String quartier, Pageable pageable) {
        return houseRepository.findByCityIgnoreCaseAndQuartierIgnoreCase(city, quartier, pageable);
    }
    
    public Page<House> searchHouses(String city, String quartier, Double minPrice, Double maxPrice,
                                   Integer minBedrooms, Integer minBathrooms, 
                                   House.PropertyType propertyType, Pageable pageable) {
        return houseRepository.searchHouses(city, quartier, minPrice, maxPrice, 
                                          minBedrooms, minBathrooms, propertyType, pageable);
    }
    
    public House saveHouse(House house) {
        return houseRepository.save(house);
    }
    
    public void deleteHouse(Long id) {
        houseRepository.deleteById(id);
    }
    
    public List<Object[]> getHouseCountByCity() {
        return houseRepository.countHousesByCity();
    }
    
    public Page<House> getHousesByPriceRange(Double minPrice, Double maxPrice, Pageable pageable) {
        return houseRepository.findByPriceBetween(minPrice, maxPrice, pageable);
    }
    
    public Page<House> getHousesByPropertyType(House.PropertyType propertyType, Pageable pageable) {
        return houseRepository.findByPropertyType(propertyType, pageable);
    }
}
