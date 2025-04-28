import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Platform, 
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewTransactionScreen = () => {
  const [transactionType, setTransactionType] = useState('');
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [note, setNote] = useState('');

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.appIcon}>
        <Image style={styles.imgAppIcon} source={require('../assets/image.png')}/>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Giao dịch mới</Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Chọn nhóm giao dịch</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>
              {transactionType || 'Chọn nhóm giao dịch'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tên giao dịch</Text>
          <TextInput
            style={styles.input}
            value={transactionName}
            onChangeText={setTransactionName}
            placeholderTextColor="#848A9C"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Số tiền giao dịch</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholderTextColor="#848A9C"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Thêm bạn</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>
              {contact || 'Thêm bạn'}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Đến hạn</Text>
          <TouchableOpacity style={styles.input} onPress={showDatepicker}>
            <Text style={styles.inputText}>
              {date.toLocaleDateString('vi-VN')}
            </Text>
            <Ionicons name="calendar" size={20} color="#DD0042" />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ghi chú</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={note}
            onChangeText={setNote}
            multiline
            numberOfLines={4}
            placeholderTextColor="#848A9C"
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>HỦY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>LƯU</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161B27',
  },
  appIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgAppIcon: {
    width: 40,
    height: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#848A9C',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1E2433',
    borderWidth: 1,
    borderColor: '#242424',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    color: '#FFFFFF',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 16,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FF0000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#3212FA',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default NewTransactionScreen;
