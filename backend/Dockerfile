# Dùng OpenJDK 17
FROM eclipse-temurin:17-jdk-alpine

# Thư mục làm việc
WORKDIR /app

# Copy file pom và source code
COPY pom.xml .
COPY src ./src

# Cài Maven trong container nếu chưa có
RUN apk add --no-cache maven

# Build ứng dụng
RUN mvn clean package -DskipTests

# Expose port
EXPOSE 8080

# Run ứng dụng
ENTRYPOINT ["java","-jar","target/cafe-management-1.0.0.jar"]
