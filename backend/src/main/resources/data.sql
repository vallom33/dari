-- Insert sample houses for Mauritania
INSERT INTO houses (title, description, city, quartier, price, bedrooms, bathrooms, sqft, year_built, lot_size, garage, property_type, status, featured, agent_name, agent_phone, agent_email, agent_image, created_at, updated_at) VALUES
('Modern Villa with Pool', 'Stunning modern villa with swimming pool, garden, and premium finishes in the prestigious Tevragh Zeina district.', 'Nouakchott', 'Tevragh Zeina', 85000000, 4, 3, 280, 2020, '500 m²', '2-car covered parking', 'VILLA', 'FOR_SALE', true, 'Aminata Ba', '+222 36 12 34 56', 'aminata@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Luxury Apartment with Ocean View', 'Beautiful apartment with panoramic ocean views in the heart of Nouadhibou. Modern amenities and prime location.', 'Nouadhibou', 'Cansado', 45000000, 3, 2, 150, 2019, '0', 'Covered parking space', 'APARTMENT', 'FOR_SALE', true, 'Mohamed Ould Ahmed', '+222 45 67 89 12', 'mohamed@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Traditional House with Garden', 'Authentic Mauritanian architecture with modern comforts. Spacious courtyard and traditional design elements.', 'Nouakchott', 'Ksar', 32000000, 5, 3, 320, 2018, '600 m²', 'Traditional courtyard parking', 'HOUSE', 'FOR_SALE', true, 'Fatima Mint Sidi', '+222 22 33 44 55', 'fatima@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Modern Townhouse', 'Contemporary townhouse in the developing Riyadh district. Perfect for families with modern amenities.', 'Nouakchott', 'Riyadh', 28000000, 3, 2, 180, 2021, '200 m²', '1-car garage', 'TOWNHOUSE', 'FOR_SALE', false, 'Ibrahim Ould Mohamed', '+222 33 44 55 66', 'ibrahim@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Beachfront Villa', 'Exclusive beachfront property with private beach access. Luxury living by the Atlantic Ocean.', 'Nouadhibou', 'Numerot', 95000000, 4, 4, 350, 2022, '800 m²', '3-car garage', 'VILLA', 'FOR_SALE', true, 'Aisha Ould Abdallahi', '+222 44 55 66 77', 'aisha@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('City Center Apartment', 'Affordable apartment in the bustling Arafat district. Great for young professionals and small families.', 'Nouakchott', 'Arafat', 18000000, 2, 1, 90, 2017, '0', 'Street parking', 'APARTMENT', 'FOR_SALE', false, 'Omar Ould Salem', '+222 55 66 77 88', 'omar@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Family Home with Garden', 'Spacious family home with large garden in the residential Dar Naim area. Perfect for growing families.', 'Nouakchott', 'Dar Naim', 42000000, 4, 3, 250, 2019, '400 m²', '2-car carport', 'HOUSE', 'FOR_SALE', false, 'Mariem Mint Ahmed', '+222 66 77 88 99', 'mariem@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Seaside Bungalow', 'Charming bungalow near the sea in Nouadhibou. Peaceful location with easy beach access.', 'Nouadhibou', 'Baghdad', 35000000, 3, 2, 160, 2020, '300 m²', '1-car garage', 'HOUSE', 'FOR_SALE', false, 'Abdallahi Ould Cheikh', '+222 77 88 99 00', 'abdallahi@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Modern Apartment Complex', 'New apartment in a modern complex with amenities. Located in the developing Sebkha district.', 'Nouakchott', 'Sebkha', 25000000, 2, 2, 120, 2023, '0', 'Underground parking', 'APARTMENT', 'FOR_SALE', false, 'Khadija Mint Mohamed', '+222 88 99 00 11', 'khadija@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Luxury Desert Villa', 'Unique villa in the historic city of Atar. Desert views and traditional architecture with modern amenities.', 'Atar', 'Centre Ville', 65000000, 5, 4, 400, 2021, '1000 m²', '2-car garage', 'VILLA', 'FOR_SALE', true, 'Sidi Ould Baba', '+222 99 00 11 22', 'sidi@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Riverside Property', 'Beautiful property along the Senegal River in Kaédi. Peaceful setting with river views.', 'Kaédi', 'Bord du Fleuve', 38000000, 4, 3, 280, 2020, '600 m²', '2-car parking', 'HOUSE', 'FOR_SALE', false, 'Aicha Mint Sidi', '+222 00 11 22 33', 'aicha@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW()),

('Modern City Loft', 'Contemporary loft in the port area of Nouakchott. Industrial design with modern comforts.', 'Nouakchott', 'El Mina', 22000000, 1, 1, 85, 2022, '0', 'No parking', 'APARTMENT', 'FOR_SALE', false, 'Yahya Ould Ahmed', '+222 11 22 33 44', 'yahya@dreamhouse.mr', '/placeholder.svg?height=100&width=100', NOW(), NOW());

-- Insert house features
INSERT INTO house_features (house_id, feature) VALUES
(1, 'Swimming Pool'), (1, 'Smart Home System'), (1, 'Gourmet Kitchen'), (1, 'Home Office'), (1, 'Walk-in Closets'), (1, 'Marble Floors'), (1, 'Central Air Conditioning'), (1, 'Security System'), (1, 'Generator'), (1, 'Solar Panels'), (1, 'Garden'),
(2, 'Ocean View'), (2, 'Modern Kitchen'), (2, 'Balcony'), (2, 'Central Air Conditioning'), (2, 'Security System'), (2, 'Elevator'), (2, 'Gym Access'),
(3, 'Traditional Courtyard'), (3, 'Garden'), (3, 'Traditional Architecture'), (3, 'Modern Kitchen'), (3, 'Central Air Conditioning'), (3, 'Security System'), (3, 'Generator'),
(4, 'Modern Design'), (4, 'Open Floor Plan'), (4, 'Modern Kitchen'), (4, 'Central Air Conditioning'), (4, 'Security System'), (4, 'Garden'),
(5, 'Private Beach Access'), (5, 'Swimming Pool'), (5, 'Ocean View'), (5, 'Luxury Finishes'), (5, 'Smart Home System'), (5, 'Security System'), (5, 'Generator'), (5, 'Outdoor Kitchen'),
(6, 'City Center Location'), (6, 'Modern Kitchen'), (6, 'Balcony'), (6, 'Central Air Conditioning'),
(7, 'Large Garden'), (7, 'Family Friendly'), (7, 'Modern Kitchen'), (7, 'Central Air Conditioning'), (7, 'Security System'), (7, 'Playground Area'),
(8, 'Near Beach'), (8, 'Peaceful Location'), (8, 'Garden'), (8, 'Modern Kitchen'), (8, 'Central Air Conditioning'),
(9, 'New Construction'), (9, 'Modern Amenities'), (9, 'Elevator'), (9, 'Gym Access'), (9, 'Central Air Conditioning'), (9, 'Security System'),
(10, 'Desert Views'), (10, 'Traditional Architecture'), (10, 'Luxury Finishes'), (10, 'Swimming Pool'), (10, 'Large Garden'), (10, 'Security System'), (10, 'Generator'),
(11, 'River Views'), (11, 'Peaceful Setting'), (11, 'Garden'), (11, 'Modern Kitchen'), (11, 'Central Air Conditioning'), (11, 'Security System'),
(12, 'Industrial Design'), (12, 'City Views'), (12, 'Modern Finishes'), (12, 'Open Floor Plan'), (12, 'Central Air Conditioning');

-- Insert house images
INSERT INTO house_images (house_id, image_url) VALUES
(1, '/placeholder.svg?height=600&width=800'), (1, '/placeholder.svg?height=600&width=800'), (1, '/placeholder.svg?height=600&width=800'), (1, '/placeholder.svg?height=600&width=800'),
(2, '/placeholder.svg?height=600&width=800'), (2, '/placeholder.svg?height=600&width=800'), (2, '/placeholder.svg?height=600&width=800'),
(3, '/placeholder.svg?height=600&width=800'), (3, '/placeholder.svg?height=600&width=800'), (3, '/placeholder.svg?height=600&width=800'),
(4, '/placeholder.svg?height=600&width=800'), (4, '/placeholder.svg?height=600&width=800'),
(5, '/placeholder.svg?height=600&width=800'), (5, '/placeholder.svg?height=600&width=800'), (5, '/placeholder.svg?height=600&width=800'), (5, '/placeholder.svg?height=600&width=800'),
(6, '/placeholder.svg?height=600&width=800'), (6, '/placeholder.svg?height=600&width=800'),
(7, '/placeholder.svg?height=600&width=800'), (7, '/placeholder.svg?height=600&width=800'), (7, '/placeholder.svg?height=600&width=800'),
(8, '/placeholder.svg?height=600&width=800'), (8, '/placeholder.svg?height=600&width=800'),
(9, '/placeholder.svg?height=600&width=800'), (9, '/placeholder.svg?height=600&width=800'),
(10, '/placeholder.svg?height=600&width=800'), (10, '/placeholder.svg?height=600&width=800'), (10, '/placeholder.svg?height=600&width=800'), (10, '/placeholder.svg?height=600&width=800'),
(11, '/placeholder.svg?height=600&width=800'), (11, '/placeholder.svg?height=600&width=800'), (11, '/placeholder.svg?height=600&width=800'),
(12, '/placeholder.svg?height=600&width=800'), (12, '/placeholder.svg?height=600&width=800');

-- Insert admin user
INSERT INTO users (email, password, role, email_verified, created_at, updated_at)
VALUES ('admin@dreamhouse.mr', '{noop}admin123', 'ADMIN', true, NOW(), NOW());
