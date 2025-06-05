package com.dreamhouse.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "houses")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class House {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false)
    private String city;
    
    private String quartier; // Neighborhood in Mauritania
    
    @Column(nullable = false)
    private Double price; // Price in MRU (Mauritanian Ouguiya)
    
    private Integer bedrooms;
    private Integer bathrooms;
    private Double sqft; // Square meters
    private Integer yearBuilt;
    private String lotSize;
    private String garage;
    
    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;
    
    @Enumerated(EnumType.STRING)
    private PropertyStatus status;
    
    @ElementCollection
    @CollectionTable(name = "house_features", joinColumns = @JoinColumn(name = "house_id"))
    @Column(name = "feature")
    private List<String> features;
    
    @ElementCollection
    @CollectionTable(name = "house_images", joinColumns = @JoinColumn(name = "house_id"))
    @Column(name = "image_url")
    private List<String> imageUrls;
    
    private Boolean featured = false;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Agent information
    private String agentName;
    private String agentPhone;
    private String agentEmail;
    private String agentImage;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
    
    public enum PropertyType {
        VILLA, APARTMENT, HOUSE, LAND, COMMERCIAL, TOWNHOUSE
    }
    
    public enum PropertyStatus {
        FOR_SALE, SOLD, PENDING, OFF_MARKET
    }
}
