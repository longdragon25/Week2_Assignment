import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
const POLO_BLUE_COLOR ='rgb(51,60,87)';
const POLO_COLOR ='rgb(71,113,246)';
const POLO_MESSAGE_COLOR ='rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('../assets/2.png') },
  { id: 2, imgSource: require('../assets/3.jpg') },
  { id: 3, imgSource: require('../assets/4.jpg') },
  { id: 4, imgSource: require('../assets/5.jpg') },
  { id: 5, imgSource: require('../assets/6.jpg') },
  { id: 6, imgSource: require('../assets/7.jpg') },
  { id: 7, imgSource: require('../assets/8.jpg') },
  { id: 8, imgSource: require('../assets/9.jpg') },
  { id: 9, imgSource: require('../assets/10.jpg') },
  { id: 10, imgSource: require('../assets/11.jpg') },
  { id: 11, imgSource: require('../assets/12.jpg') },
  { id: 12, imgSource: require('../assets/13.jpg') },
  
];

const ProfileScreen = () => {
  const centerImgData = Math.floor(imgData.length / 3);

  return (
   
      <View style={styles.container}>
          <View style={styles.header}>
              <AntDesign name="arrowleft" size={24} color="black" />
              <Text style={{fontSize:18}}>Hí anh em!</Text>
              <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
          <ScrollView>
          <View>
          <View style={styles.top}>
          <View style={styles.underTop}>
            <View style={styles.viewAvatar}>
              <Image source={require('../assets/1.jpg')} style={styles.avatar}></Image>
            </View>
            <View style={styles.viewInfo}>
              <View>
                <Text style={styles.nameText}>Phùng Thanh Độ</Text>
                <Text style={styles.jobText}>Streamer</Text>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendMessageButton}>
                  <Feather name="send" size={28} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mid}>
          <View style={styles.countGroup}>
            <Text style={styles.countText}>210</Text>
            <Text style={styles.countLabel}>Photos</Text>
          </View>
          <View style={styles.countGroup}>
            <Text style={styles.countText}>2M</Text>
            <Text style={styles.countLabel}>Followers</Text>
          </View>
          <View style={styles.countGroup}>
            <Text style={styles.countText}>1</Text>
            <Text style={styles.countLabel}>Following</Text>
        </View>
        </View>
          </View>
          
        <View style={styles.bot}>
          <View style={{flexDirection:"column"}}>
            {imgData.slice(0,centerImgData).map(item=>{
              return(
                <Image source={item.imgSource}
                style={styles.imgCSS}>
                </Image>
              );
            })}
          </View>
          <View style={{flexDirection:"column"}}>
            {imgData.slice(centerImgData,centerImgData*2).map(item=>{
              return(
                <Image source={item.imgSource}
                style={styles.imgCSS}>
                </Image>
              );
            })}
          </View>
          <View style={{flexDirection:"column"}}>
            {imgData.slice(centerImgData*2,centerImgData*3).map(item=>{
              return(
                <Image source={item.imgSource}
                style={styles.imgCSS}>
                </Image>
              );
            })}
          </View>
        </View>
          </ScrollView>
          
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  top :{
    padding:10,   
  },
  mid:{
    padding:10,
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  bot:{
    flex: 0.6,
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent:"space-around"
  },
  underTop:{
    flex:1,
    flexDirection:"row"
  },
  viewAvatar:{
    flex:5,
    justifyContent:"center",
    alignItems:"center"
  },
  viewInfo:{
    flex:5,
    flexDirection:"column",
    justifyContent:"space-around"
  },
  avatar:{
    width:140,
    height:140,
    borderRadius:140/2
  },
  nameText:{
    fontSize:24,
    fontWeight:"bold",
    color: "black"
  },
  jobText:{
    fontSize:18,
    fontWeight:'400',
    color: "gray",
    
  },
  buttonWrapper:{
    flexDirection:"row"
  },
  followButton:{
    backgroundColor: POLO_COLOR,
    width:120,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,
  },
  followText:{
    color:"white",
    fontSize:15,
    fontWeight:'700'
  },
  sendMessageButton:{
    backgroundColor: POLO_MESSAGE_COLOR,
    width:50,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,
marginLeft:10
  },
  countGroup:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  countText:{
    fontSize:25,
    fontWeight:"bold"
  },
  countLabel:{
    fontSize:20,
    fontWeight:'400'
  },
  imgCSS:{
    width:130,
    height:140,
    borderRadius:5,
    marginBottom:5
  }
});
export default ProfileScreen;