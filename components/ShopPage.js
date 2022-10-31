import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View
} from "react-native";
import * as Font from 'expo-font';
import * as Location from "expo-location";
/** import Icon from 'react-native-vector-icons/FontAwesome'; */
import Icon from '@expo/vector-icons/FontAwesome';
import Icon5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

const cheerio = require("cheerio-without-node-native");
// const request = require("requestretry");


function ShopPage({ navigation }) {
  const [city, setCity] = useState("Loading...");
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

  let pageNum = 1;
	let result = [];
	let ulList = [];
	// 전체 페이지 리스트 구하기
	let url = `https://www.nubija.com/board/getList.do?bdno=2&currPage=${pageNum}`;
	const options = {
		method: "GET",
		encoding: null,
		headers: {
			"User-Agent":
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
			Accept:
				"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"Content-Type": "application/x-www-form-urlencoded",
			Cookie:
				"WMONID=m2zajRZqm5f; _ga=GA1.2.1860211416.1622781690; _gid=GA1.2.882171542.1623936429; JSESSIONID=DFFB23E27EFF9769B473D12C31A83487; _gat=1",
		},
	};

	let html = await fetch(url, options);
	let responseOK = html && html.ok;
	if (responseOK) {
		let data = await html.text();
		const $ = cheerio.load(data);
		const $list = $("#notice_border tbody tr td:nth-of-type(2) a").toArray();
		const $maxPageNum = $("#list_number span:nth-of-type(2)")
			.text()
			.split("/")[1];
		$list.map((el, idx) => {
			ulList[idx] = parseInt($(el).attr("onclick").split("'")[1]);
		});
		// console.log(ulList, $maxPageNum);
	}

	// 페이지별 데이터 구하기

	await Promise.all(
		ulList.map((el, idx) => {
			let liUrl = `https://www.nubija.com/board/getView.do?bdno=2&blno=${el}`;
			return fetch(liUrl, options)
				.then((res) => res.text())
				.then((data) => {
					const $ = cheerio.load(data);
					//trim으로 공백 제거
					result.push({
						id: idx,
						title: $(".view_title").text().trim(),
						content: $("#board_contents").text().trim(),
						date: $("#border_view tbody tr:nth-of-type(2) td:nth-of-type(1)")
							.text()
							.trim(),
					});
				});
		})
	);
  
  return (
  <View style={styles.container}>
    <View style={styles.tobtabs}/**상단 바 설정 */>
      <TouchableOpacity style={styles.nullfreunde} onPress={() => navigation.pop()}>
        <Image style={styles.iconimage} source={require("greenery/assets/Symbol.png")}/>
      </TouchableOpacity>
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
  
    <View style={styles.shoppage1}>
      <View style={styles.title}/**이전 페이지로 돌아가기 */>
        
      </View>
      <View style={styles.shoppagesetting}>
        <Text style={styles.shoppagetext}>
          Shop
        </Text>
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
    height: '100%',
    width: '40%',
  },
  iconimage: {
    width: '60%',
    height: '100%',
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
  shoppage1: {
    marginTop: 60,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  shoppagesetting: {
    backgroundColor: "#a0c16d",
    width: "90%",
    height: "90%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  shoppagetext: {
    fontSize: 20,
  },
});

export default ShopPage;