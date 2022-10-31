import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Switch
} from "react-native";
import * as Location from "expo-location";
/**웹 상에 있는 Icon을 불러와서 사용 */
import Icon from '@expo/vector-icons/FontAwesome';
import Icon5 from '@expo/vector-icons/FontAwesome5';
/**settingdata.js에 있는 정보를 사용한다는 것. 여기서는 그 안의 배열값에 맞추어  */
import settingdata from './setting/settingdata';
/**Transition을 이용해서 토글 메뉴를 눌렀을 때 자연스럽게 열림 */
import { Transition, Transitioning } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

const transition = (
  <Transition.Together>
    <Transition.In type='fade' />
    <Transition.Change />
    <Transition.Out type='fade' />
  </Transition.Together>
);

function SettingPage({navigation, item, onPress, style}) {
  /**위치 정보를 사용할지에 대해 사용자에게 물어봄 */
  const [city, setCity] = useState([null]);
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
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
/** container은 전체를 담고 있다 */
    <View style={styles.container}>
      <View style={styles.title}/**이전으로 돌아가는 화살표 넣음*/>
        <TouchableOpacity style={styles.settingicon} onPress={() => navigation.pop()}>
          <Icon name="angle-left" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.titletext}>Settings</Text>
      </View>
      <View style={styles.profile}/**유저의 프로필. 구현되지 않음*/>
        <View style={styles.profilephoto}>
          <Image style={styles.profilephotoimage} source={require("greenery/assets/logo-greenery.png")} />
        </View>
        <View style={styles.profiletext}>
          <View>
            <View style={styles.profiletextnull}>
              <Text>

              </Text>
            </View>
            <View style={styles.profiletextnameline}/**프로필 암꺼나 넣음*/>
              <Text style={styles.profiletextname}>Bae Junyeol</Text>
              <View style={styles.nullfreund}></View>
              <TouchableOpacity
              onPress={() => navigation.navigate('ProfilePage')}
              /**프로필 설정 창으로 넘어감. 구현 x */
              >
                <Text style={styles.profilesettings}>settings</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.profiletextnameline}>
            <Text style={styles.profiletextplus}>{city}</Text>
            <View style={styles.nullfreund}></View>
            <TouchableOpacity>
              <Text style={styles.profilelogout}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.underlineview}>
        <View style={styles.underline1}></View>
      </View>

      <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
      /**transition을 이용해서 settingdata에 있는 값을 화면으로 구현. */
      >
      <StatusBar hidden />
      {settingdata.map(({ bg, category, cardicon, subCategories }, index) => {
        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              ref.current.animateNextTransition();
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            <View style={[styles.card]}>
              <View style={styles.electronics}>
                <Icon5 style = {styles.electronicsicon} name={cardicon} size={20} color="#000000" />
                <Text style={[styles.electronicstext1]}>{category}</Text>
                <Icon5 style = {styles.toggledown} name="chevron-down" size={20} color="#000000" />
              </View>
              {index === currentIndex && (
                <View>
                  {subCategories.map((subCategory) => (
                    <TouchableOpacity key={subCategory} style={styles.subCategoriesList}>
                    <Text key={subCategory} style={[styles.subCategoriesListText]}>
                      {subCategory}
                    </Text>
                    </TouchableOpacity>
                  ))}
                  </View>
              )}

            </View>
            <View style={styles.underlineview}>
              <View style={styles.underline}></View>
            </View>
          </TouchableOpacity>
        );
      })}
    </Transitioning.View>
    </View>
  );
}

/**아래는 색, 크기, 위치 설정 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88b04b',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 5,
  },
  settingicon: {
    paddingRight: 10,
  },
  titletext: {
    fontSize: 20,
  },
  underlineview: {
    width: "100%",
    alignItems: 'center',
  },
  underline1: {
    width: "95%",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
    marginTop: 20,
  },
  underline: {
    width: "95%",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    marginTop: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nullfreund: {
  },
  profilephotoimage: {
    width: 100,
    height: 100,
    marginLeft: 20,
    marginTop: 20,
  },
  profiletextnameline: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "65%",
    justifyContent: 'space-between',
  },
  profilesettings: {

  },
  profiletext: {
    marginLeft: 20,
  },
  profiletextname: {
    fontSize: 25,
    marginBottom: 5,
  },
  profiletextnull: {
    height: 15,
  },
  electronics: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  electronicstext1: {
    fontSize: 20,
    marginLeft: 10,
  },
  toggledown: {
    marginLeft: 10,
    marginTop: 5,
  },
  subCategoriesList: {
    marginTop: 10,
    marginLeft: 25,
    width: "100%",
  },
  subCategoriesListText: {
    marginBottom: 10,
    fontSize: 20,
  },
});

export default SettingPage;