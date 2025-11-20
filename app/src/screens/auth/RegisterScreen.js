import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { register } = useAuth();

  const handleRegister = async () => {
    if (!formData.username || !formData.password || !formData.fullName) {
      setError('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    if (formData.password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await register({
        username: formData.username,
        password: formData.password,
        fullName: formData.fullName,
        email: formData.email || undefined,
      });
      // Navigation sẽ tự động chuyển sang MainNavigator
    } catch (err) {
      setError(
        err.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Đăng Ký</Title>
            <Paragraph style={styles.subtitle}>
              Tạo tài khoản mới
            </Paragraph>

            {error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : null}

            <TextInput
              label="Tên đăng nhập *"
              value={formData.username}
              onChangeText={(text) =>
                setFormData({ ...formData, username: text })
              }
              mode="outlined"
              style={styles.input}
              autoCapitalize="none"
              disabled={loading}
            />

            <TextInput
              label="Họ và tên *"
              value={formData.fullName}
              onChangeText={(text) =>
                setFormData({ ...formData, fullName: text })
              }
              mode="outlined"
              style={styles.input}
              disabled={loading}
            />

            <TextInput
              label="Email"
              value={formData.email}
              onChangeText={(text) =>
                setFormData({ ...formData, email: text })
              }
              mode="outlined"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              disabled={loading}
            />

            <TextInput
              label="Mật khẩu *"
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              mode="outlined"
              secureTextEntry
              style={styles.input}
              disabled={loading}
            />

            <TextInput
              label="Xác nhận mật khẩu *"
              value={formData.confirmPassword}
              onChangeText={(text) =>
                setFormData({ ...formData, confirmPassword: text })
              }
              mode="outlined"
              secureTextEntry
              style={styles.input}
              disabled={loading}
            />

            <Button
              mode="contained"
              onPress={handleRegister}
              style={styles.button}
              disabled={loading}
              loading={loading}
            >
              Đăng Ký
            </Button>

            <Button
              mode="text"
              onPress={() => navigation.navigate('Login')}
              style={styles.linkButton}
              disabled={loading}
            >
              Đã có tài khoản? Đăng nhập
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 4,
  },
  linkButton: {
    marginTop: 16,
  },
  errorText: {
    color: '#d32f2f',
    marginBottom: 16,
    textAlign: 'center',
  },
});

