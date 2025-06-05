# DreamHouse Mauritania - Real Estate Platform

A modern, full-stack real estate platform specifically designed for the Mauritanian market, featuring beautiful UI/UX and comprehensive property management.

## 🏗️ Project Structure

\`\`\`
house-store/
├── frontend/          # Angular application
│   ├── src/app/      # Angular components and services
│   └── src/assets/   # Static assets
└── backend/          # Spring Boot application
    ├── src/main/java/com/dreamhouse/
    │   ├── controller/   # REST API controllers
    │   ├── model/       # JPA entities
    │   ├── repository/  # Data access layer
    │   └── service/     # Business logic
    └── src/main/resources/
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 17+
- Java 17+
- PostgreSQL 12+
- Maven 3.6+

### Frontend Setup (Angular)
\`\`\`bash
cd frontend
npm install
ng serve
\`\`\`
The frontend will be available at `http://localhost:4200`

### Backend Setup (Spring Boot)
1. Create PostgreSQL database:
\`\`\`sql
CREATE DATABASE dreamhouse_db;
CREATE USER dreamhouse_user WITH PASSWORD 'dreamhouse_password';
GRANT ALL PRIVILEGES ON DATABASE dreamhouse_db TO dreamhouse_user;
\`\`\`

2. Run the Spring Boot application:
\`\`\`bash
cd backend
mvn spring-boot:run
\`\`\`
The backend API will be available at `http://localhost:8080`

## 🇲🇷 Mauritania-Specific Features

### Cities
- Nouakchott, Nouadhibou, Kiffa, Kaédi, Atar, and more

### Neighborhoods (Quartiers)
- **Nouakchott**: Tevragh Zeina, Ksar, Riyadh, Arafat, Dar Naim, Sebkha, El Mina
- **Nouadhibou**: Numerot, Cansado, Baghdad, Qhairaat

### Features
- Prices in MRU (Mauritanian Ouguiya)
- Local agent profiles
- Cultural adaptation for local market

## 🎨 File Extensions Used

- `.ts` - TypeScript files (Angular components, services)
- `.html` - HTML templates (Angular)
- `.scss` - Sass stylesheets (Angular)
- `.java` - Java files (Spring Boot backend)
- `.json` - Configuration files

## 📱 Key Features

1. **Advanced Search**: Filter by city and quartier
2. **Beautiful UI**: Modern design with animations
3. **Responsive**: Works on all devices
4. **Real Estate Focused**: Tailored for Mauritanian market

## 🔧 Commands

### Frontend
\`\`\`bash
ng serve          # Start development server
ng build          # Build for production
ng test           # Run tests
\`\`\`

### Backend
\`\`\`bash
mvn spring-boot:run    # Start Spring Boot server
mvn clean package     # Build JAR file
\`\`\`

---

**DreamHouse Mauritania** - Your perfect home in Mauritania! 🏠✨
\`\`\`

Perfect! Now you have a **complete Angular frontend** and **Spring Boot backend** with:

✅ **Proper Angular Structure** - Uses `.ts`, `.html`, `.scss` files  
✅ **Mauritania-Specific Filtering** - Cities and quartiers (neighborhoods)  
✅ **Beautiful Design** - Modern UI with animations  
✅ **Separated Projects** - Clear frontend/backend separation  
✅ **Working Commands** - `ng serve` will work properly  

**To run the project:**

1. **Frontend**: `cd frontend && npm install && ng serve`
2. **Backend**: `cd backend && mvn spring-boot:run`

The Angular app will run on `http://localhost:4200` and Spring Boot on `http://localhost:8080`! 🚀
