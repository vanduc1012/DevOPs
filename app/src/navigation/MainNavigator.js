import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

// User Screens
import HomeScreen from '../screens/user/HomeScreen';
import BookTableScreen from '../screens/user/BookTableScreen';
import MyOrdersScreen from '../screens/user/MyOrdersScreen';

// Admin Screens
import MenuManagementScreen from '../screens/admin/MenuManagementScreen';
import TableManagementScreen from '../screens/admin/TableManagementScreen';
import OrderManagementScreen from '../screens/admin/OrderManagementScreen';
import ReportsScreen from '../screens/admin/ReportsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function UserTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'BookTable') {
            iconName = focused ? 'table-chair' : 'table-chair';
          } else if (route.name === 'MyOrders') {
            iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trang Chủ' }} />
      <Tab.Screen name="BookTable" component={BookTableScreen} options={{ title: 'Đặt Bàn' }} />
      <Tab.Screen name="MyOrders" component={MyOrdersScreen} options={{ title: 'Đơn Của Tôi' }} />
    </Tab.Navigator>
  );
}

function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'MenuManagement') {
            iconName = focused ? 'food' : 'food-outline';
          } else if (route.name === 'TableManagement') {
            iconName = focused ? 'table-multiple' : 'table-multiple';
          } else if (route.name === 'OrderManagement') {
            iconName = focused ? 'clipboard-text' : 'clipboard-text-outline';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'chart-bar' : 'chart-bar';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen name="MenuManagement" component={MenuManagementScreen} options={{ title: 'Quản Lý Menu' }} />
      <Tab.Screen name="TableManagement" component={TableManagementScreen} options={{ title: 'Quản Lý Bàn' }} />
      <Tab.Screen name="OrderManagement" component={OrderManagementScreen} options={{ title: 'Quản Lý Order' }} />
      <Tab.Screen name="Reports" component={ReportsScreen} options={{ title: 'Báo Cáo' }} />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  const { isAdmin } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAdmin ? (
        <Stack.Screen name="AdminMain" component={AdminTabs} />
      ) : (
        <Stack.Screen name="UserMain" component={UserTabs} />
      )}
    </Stack.Navigator>
  );
}

