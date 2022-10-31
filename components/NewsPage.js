import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import * as Location from "expo-location";
import Icon from '@expo/vector-icons/FontAwesome';
import Icon5 from '@expo/vector-icons/FontAwesome5';
import axios from "axios";
import Article from './article/ArticlePage';




const Item = props => (
  <TouchableOpacity onPress={() => alert("ASIN:" + props.asin)}>
    <Text>{props.title}</Text>
    <Image source={{uri: props.imageUrl}}/>
    <Text>{props.price}</Text>
    <Text>{props.rating}</Text>
  </TouchableOpacity>
);

function NewsPage({ navigation }) {
  const [city, setCity] = useState([]);
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].region);
  };
  useEffect(() => {
    ask();
  }, []);

  const [articles,setArticles] = useState([]);
  const getNews = () => {
      axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9',{
          params:{
              category: "science",
          }
      })
          .then( (response) =>{
              // handle success
              setArticles(response.data.articles);
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
          .then(function () {
              // always executed
          });
  }
  useEffect(() => {
    getNews();
  },[]);

  return (
  <View style={styles.container}>
    <View style={styles.tobtabs}/**상단 바 설정 */>
      <View style={styles.nullfreunde} />
      <Text style={styles.nhousehold}>
        1인 가구
      </Text>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => navigation.navigate('SettingPage')}
      >
        <Icon name="gear" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
    <View style={styles.newspage1}>
      <View style={styles.newspagesetting}>
      <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                        url={item.url}
                    />}
                keyExtractor = {(item) => item.title}
            />

        </SafeAreaView>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88b04b',
  },
  tobtabs: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2%',
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  nullfreunde: {
    width: '40%',
  },
  nhousehold: {
    fontSize: 20,
    fontWeight: "500",
  },
  city: {
  },
  cityName: {
    fontSize: 20,
    fontWeight: "500",
  },
  setting: {
    
  },
  newspage1: {
    marginTop: 60,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  newspagesetting: {
    backgroundColor: "#92BD51",
    width: "90%",
    height: "90%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  newspagetext: {
    fontSize: 20,
  },
});

export default NewsPage;