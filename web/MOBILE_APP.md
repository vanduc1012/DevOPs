# Mobile App - Tổng Quan

## Giới thiệu

Đã xây dựng thành công ứng dụng mobile React Native (Expo) tích hợp với backend Spring Boot hiện có trong thư mục `web/backend`.

## Vị trí

Ứng dụng mobile được đặt trong thư mục: `web/mobile/`

## Tính năng đã triển khai

### ✅ Authentication
- Đăng nhập (Login)
- Đăng ký (Register)
- JWT Token authentication
- Secure storage với Expo SecureStore

### ✅ User Screens
1. **HomeScreen**: 
   - Hiển thị thông tin user
   - Xem menu hôm nay
   - Pull to refresh

2. **BookTableScreen**:
   - Xem danh sách bàn trống
   - Chọn bàn và order món
   - Chọn số lượng món
   - Tạo order

3. **MyOrdersScreen**:
   - Xem tất cả đơn hàng của mình
   - Hiển thị chi tiết từng đơn
   - Trạng thái đơn hàng

### ✅ Admin Screens
1. **MenuManagementScreen**:
   - Xem danh sách menu
   - Thêm món mới (FAB button)
   - Sửa món
   - Xóa món
   - Quản lý trạng thái còn hàng/hết hàng

2. **TableManagementScreen**:
   - Xem danh sách bàn
   - Thêm bàn mới
   - Sửa thông tin bàn
   - Xóa bàn
   - Cập nhật trạng thái bàn (Trống/Đang dùng/Đã thanh toán)

3. **OrderManagementScreen**:
   - Xem tất cả order
   - Chi tiết từng order
   - Cập nhật trạng thái order (Chờ xác nhận/Đã xác nhận/Đang chuẩn bị/Sẵn sàng/Hoàn thành/Hủy)

4. **ReportsScreen**:
   - Báo cáo hôm nay
   - Tổng số khách
   - Tổng doanh thu
   - Tổng số đơn
   - Chi tiết đơn hàng

## Cấu trúc dự án

```
web/mobile/
├── src/
│   ├── config/
│   │   └── api.js              # Axios configuration với interceptors
│   ├── context/
│   │   └── AuthContext.js      # Authentication context
│   ├── navigation/
│   │   ├── AuthNavigator.js    # Navigation cho auth screens
│   │   └── MainNavigator.js    # Navigation cho main app (User/Admin tabs)
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.js
│   │   │   └── RegisterScreen.js
│   │   ├── user/
│   │   │   ├── HomeScreen.js
│   │   │   ├── BookTableScreen.js
│   │   │   └── MyOrdersScreen.js
│   │   └── admin/
│   │       ├── MenuManagementScreen.js
│   │       ├── TableManagementScreen.js
│   │       ├── OrderManagementScreen.js
│   │       └── ReportsScreen.js
│   └── services/
│       └── api.js              # API service functions
├── App.js                      # Entry point
├── app.json                    # Expo configuration
├── babel.config.js
├── package.json
├── README.md
└── SETUP.md
```

## Công nghệ sử dụng

- **React Native**: 0.73.0
- **Expo**: ~50.0.0
- **React Navigation**: 6.x (Native Stack + Bottom Tabs)
- **React Native Paper**: UI components
- **Axios**: HTTP client
- **Expo SecureStore**: Secure storage (thay localStorage)
- **Expo Vector Icons**: Icons

## API Integration

- **Base URL**: `https://devops-3-yqd0.onrender.com` (có thể cấu hình qua `.env`)
- **Authentication**: JWT Bearer Token
- **Storage**: Expo SecureStore (bảo mật hơn localStorage)
- **CORS**: Backend đã hỗ trợ CORS

## Cách chạy

1. Cài đặt dependencies:
```bash
cd web/mobile
npm install
```

2. Chạy ứng dụng:
```bash
npm start
```

3. Mở trên thiết bị:
   - Android: Nhấn `a` hoặc quét QR code bằng Expo Go
   - iOS: Nhấn `i` hoặc quét QR code bằng Expo Go

## Tài khoản test

- **Admin**: `root` / `root123`
- Hoặc đăng ký tài khoản mới

## Điểm khác biệt với Web App

1. **Storage**: Dùng Expo SecureStore thay vì localStorage
2. **Navigation**: React Navigation thay vì React Router
3. **UI Components**: React Native Paper thay vì HTML/CSS
4. **Icons**: Expo Vector Icons
5. **Layout**: Mobile-first design với bottom tabs

## Tính năng nổi bật

- ✅ Pull to refresh trên tất cả screens
- ✅ Loading states
- ✅ Error handling
- ✅ Form validation
- ✅ Responsive design
- ✅ Material Design UI
- ✅ Secure token storage
- ✅ Auto navigation sau login/register
- ✅ Role-based navigation (User/Admin)

## Next Steps (Có thể mở rộng)

- [ ] Push notifications
- [ ] Offline mode với local storage
- [ ] Image upload cho menu items
- [ ] QR code scanning
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Biometric authentication

## Tài liệu tham khảo

- Xem `web/mobile/README.md` để biết chi tiết
- Xem `web/mobile/SETUP.md` để biết cách setup

