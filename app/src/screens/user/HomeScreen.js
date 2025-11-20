import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Button,
  Text,
  Avatar,
  Chip,
} from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { menuService } from '../../services/api';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      const response = await menuService.getAvailable();
      setMenu(response.data);
    } catch (error) {
      console.error('Error loading menu:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadMenu();
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Card style={styles.welcomeCard}>
        <Card.Content>
          <View style={styles.userInfo}>
            <Avatar.Text
              size={64}
              label={user?.fullName?.charAt(0)?.toUpperCase() || 'U'}
            />
            <View style={styles.userDetails}>
              <Title>Xin chào, {user?.fullName || user?.username}!</Title>
              <Chip icon="account" style={styles.roleChip}>
                {user?.role === 'ADMIN' ? 'Quản trị viên' : 'Khách hàng'}
              </Chip>
            </View>
          </View>
          <Button
            mode="outlined"
            onPress={logout}
            style={styles.logoutButton}
            icon="logout"
          >
            Đăng xuất
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.menuCard}>
        <Card.Content>
          <Title style={styles.sectionTitle}>
            <MaterialCommunityIcons name="food" size={24} /> Menu Hôm Nay
          </Title>
          {loading ? (
            <Paragraph>Đang tải...</Paragraph>
          ) : menu.length === 0 ? (
            <Paragraph>Chưa có món nào trong menu</Paragraph>
          ) : (
            menu.map((item) => (
              <Card key={item.id} style={styles.menuItem} mode="outlined">
                <Card.Content>
                  <View style={styles.menuItemContent}>
                    <View style={styles.menuItemInfo}>
                      <Title style={styles.menuItemName}>{item.name}</Title>
                      <Paragraph>{item.description || 'Không có mô tả'}</Paragraph>
                      <Text style={styles.menuItemPrice}>
                        {item.price?.toLocaleString('vi-VN')} đ
                      </Text>
                    </View>
                    {item.available !== false && (
                      <Chip icon="check-circle" style={styles.availableChip}>
                        Còn hàng
                      </Chip>
                    )}
                  </View>
                </Card.Content>
              </Card>
            ))
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  welcomeCard: {
    margin: 16,
    elevation: 4,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  userDetails: {
    marginLeft: 16,
    flex: 1,
  },
  roleChip: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  logoutButton: {
    marginTop: 8,
  },
  menuCard: {
    margin: 16,
    marginTop: 0,
    elevation: 4,
  },
  sectionTitle: {
    marginBottom: 16,
    fontSize: 20,
  },
  menuItem: {
    marginBottom: 12,
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  menuItemInfo: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 18,
    marginBottom: 4,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ee',
    marginTop: 8,
  },
  availableChip: {
    backgroundColor: '#4caf50',
  },
});

