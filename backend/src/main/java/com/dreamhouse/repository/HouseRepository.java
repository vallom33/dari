package com.dreamhouse.repository;

import com.dreamhouse.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HouseRepository extends JpaRepository<House, Long> {
    
    // Find houses by city
    Page<House> findByCityIgnoreCase(String city, Pageable pageable);
    
    // Find houses by city and quartier
    Page<House> findByCityIgnoreCaseAndQuartierIgnoreCase(String city, String quartier, Pageable pageable);
    
    // Find featured houses
    List<House> findByFeaturedTrueOrderByCreatedAtDesc();
    
    // Find houses by price range
    Page<House> findByPriceBetween(Double minPrice, Double maxPrice, Pageable pageable);
    
    // Find houses by property type
    Page<House> findByPropertyType(House.PropertyType propertyType, Pageable pageable);
    
    // Find houses by status
    Page<House> findByStatus(House.PropertyStatus status, Pageable pageable);
    
    // Complex search query
    @Query("SELECT h FROM House h WHERE " +
           "(:city IS NULL OR LOWER(h.city) LIKE LOWER(CONCAT('%', :city, '%'))) AND " +
           "(:quartier IS NULL OR LOWER(h.quartier) LIKE LOWER(CONCAT('%', :quartier, '%'))) AND " +
           "(:minPrice IS NULL OR h.price >= :minPrice) AND " +
           "(:maxPrice IS NULL OR h.price <= :maxPrice) AND " +
           "(:minBedrooms IS NULL OR h.bedrooms >= :minBedrooms) AND " +
           "(:minBathrooms IS NULL OR h.bathrooms >= :minBathrooms) AND " +
           "(:propertyType IS NULL OR h.propertyType = :propertyType) AND " +
           "h.status = 'FOR_SALE'")
    Page<House> searchHouses(
        @Param("city") String city,
        @Param("quartier") String quartier,
        @Param("minPrice") Double minPrice,
        @Param("maxPrice") Double maxPrice,
        @Param("minBedrooms") Integer minBedrooms,
        @Param("minBathrooms") Integer minBathrooms,
        @Param("propertyType") House.PropertyType propertyType,
        Pageable pageable
    );
    
    // Get houses by agent
    Page<House> findByAgentEmailIgnoreCase(String agentEmail, Pageable pageable);
    
    // Count houses by city
    @Query("SELECT h.city, COUNT(h) FROM House h WHERE h.status = 'FOR_SALE' GROUP BY h.city")
    List<Object[]> countHousesByCity();
}
