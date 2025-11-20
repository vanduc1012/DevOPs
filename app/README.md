# Cafe Management Mobile App

Ứng dụng mobile quản lý quán cafe được xây dựng bằng React Native và Expo, tích hợp với backend Spring Boot.

## Tính năng

### Người dùng (USER)
- ✅ Đăng ký / Đăng nhập
- ✅ Xem menu
- ✅ Đặt bàn và order món
- ✅ Xem đơn hàng của mình

### Quản trị viên (ADMIN)
- ✅ Quản lý menu (thêm/sửa/xóa món)
- ✅ Quản lý bàn (thêm/sửa/xóa, cập nhật trạng thái)
- ✅ Quản lý order (xem tất cả, cập nhật trạng thái)
- ✅ Xem báo cáo doanh thu

## Yêu cầu

- Node.js 18+
- npm hoặc yarn
- Expo CLI
- Android Studio (cho Android) hoặc Xcode (cho iOS)

## Cài đặt

1. Cài đặt dependencies:
```bash
cd app
npm install
npm install --legacy-peer-deps
npm install react@18.2.0 react-dom@18.2.0 --legacy-peer-deps
npm install --legacy-peer-deps
npm install -g expo-cli
Cài đặt thêm 02 máy ảo android trên ANDROID STUDIO
```

2. Cấu hình API URL (tùy chọn):
Tạo file `.env` trong thư mục `app`:
```
EXPO_PUBLIC_API_URL=https://devops-3-yqd0.onrender.com
```

3. Chạy ứng dụng:
```bash
npm start --- khởi động backend app
npm run android --- chạy ứng dụng app
```

Sau đó:
- Nhấn `a` để mở trên Android emulator
- Nhấn `i` để mở trên iOS simulator
- Quét QR code bằng Expo Go app trên điện thoại thật

## Cấu trúc dự án

```
app/
├── src/
│   ├── config/          # API configuration
│   ├── context/         # React Context (Auth)
│   ├── navigation/      # Navigation setup
│   ├── screens/         # Các màn hình
│   │   ├── auth/       # Login, Register
│   │   ├── user/       # Home, BookTable, MyOrders
│   │   └── admin/      # Menu, Tables, Orders, Reports
│   └── services/        # API services
├── App.js               # Entry point
├── app.json            # Expo configuration
└── package.json        # Dependencies
```

## Tài khoản mặc định

- **Admin**: 
  - Username: `root`
  - Password: `root123`

## API Integration

Ứng dụng sử dụng cùng API backend với web app:
- Base URL: `https://devops-3-yqd0.onrender.com`
- Authentication: JWT Bearer Token
- Storage: Expo SecureStore (thay vì localStorage)

## Build cho production

### Android
```bash
expo build:android
```

### iOS
```bash
expo build:ios
```

## Troubleshooting

### Lỗi kết nối API
- Kiểm tra `EXPO_PUBLIC_API_URL` trong `.env`
- Đảm bảo backend đang chạy và có thể truy cập được
- Kiểm tra CORS configuration trên backend

### Lỗi dependencies
```bash
rm -rf node_modules
npm install
```

### Clear cache
```bash
expo start -c
```

## Công nghệ sử dụng

- **React Native**: Framework mobile
- **Expo**: Development platform
- **React Navigation**: Navigation
- **React Native Paper**: UI components
- **Axios**: HTTP client
- **Expo SecureStore**: Secure storage

