import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../style';
import Colors from '../../../shared/colors';

const DetailProfileScreen = ({ navigation }) => {
  const handleInfoIconPress = () => {
    navigation.navigate('ChangeInformation');
    console.log('Adjust was pressed.');
  };

  const handleResetPasswordPress = () => {
    navigation.navigate('ResetPassword');
    console.log('Goto reset was pressed.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Nguyễn Đắc Cường</Text>
        <TouchableOpacity onPress={handleInfoIconPress}>
          <View style={styles.headerTextContainer}>
            <Ionicons name="pencil" size={25} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={[{height: 'auto', marginTop: 20, backgroundColor: Colors.background, borderRadius: 12,}]}>
        <View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>Username</Text>
            <Text style={styles.textRight}>daccuong</Text>
          </View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>User Name</Text>
            <Text style={styles.textRight}>Nguyễn Đắc Cường</Text>
          </View>
          <View style={[styles.textContainer, styles.row,]}>
            <Text style={[styles.textLeft, {flex:2}]}>Phone Number</Text>
            <Text style={styles.textRight}>012345678</Text>
          </View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>Date of birth</Text>
            <Text style={styles.textRight}>11/03/2003</Text>
          </View>
          <View style={[styles.textContainer, styles.row]}>
            <Text style={styles.textLeft}>Email</Text>
            <Text style={styles.textRight}>daccuong123@gmail.com</Text>
          </View>
          <TouchableWithoutFeedback onPress={handleResetPasswordPress}>
            <View style={[styles.textContainer, styles.row, {borderBottomWidth:0}]}>
              <Text style={[styles.textLeft, {flex:2}]}>Reset password</Text>
              <Text style={styles.textRight}>********</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="black" />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text style={[{height:50}]}></Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailProfileScreen;