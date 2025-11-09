FROM maven:3.9-eclipse-temurin-17-alpine AS build
WORKDIR /app

# Copy pom.xml và src từ cùng thư mục
COPY pom.xml .
COPY src ./src

# Download dependencies offline
RUN mvn dependency:go-offline -B

# Build jar
RUN mvn clean package -DskipTests

# Stage runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
