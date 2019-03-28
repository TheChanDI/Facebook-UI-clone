import React from "react";
import {
  Text,
  View,
  Animated,
  Image,
  Easing,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import HomeScreen from "./src/components/HomeScreen";
import SettingScreen from "./src/components/SettingScreen";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

const customTabBarComponent = props => {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderColor: "#DDDEE3",
        height: 46,
        paddingTop: 10
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Icon
          name="images"
          size={22}
          onPress={() => alert("Home!!")}
          color="#ff3333"
        />
        <Icon
          name="users"
          size={22}
          color="#656773"
          onPress={() => props.navigation.navigate("Setting")}
        />
        <Icon name="user-friends" size={22} color="#656773" />
        <Icon name="bell" size={22} color="#656773" />
        <Icon name="bars" size={22} color="#656773" />
      </View>
    </View>
  );
};

const TopTabNav = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Setting: {
      screen: SettingScreen
    },
    Notification: {
      screen: SettingScreen
    }
  },
  {
    initialRouteName: "Home",
    tabBarComponent: customTabBarComponent
  }
);

const TopTabNavigator = createAppContainer(TopTabNav);

class App extends React.Component {
  render() {
    return (
      <ScrollView stickyHeaderIndices={[1]}>
        <View
          style={{
            backgroundColor: "#4167B2",
            height: 50,
            width: "100%",
            position: "absolute",
            flexDirection: "row"
          }}
        >
          <Icon
            name="camera"
            color="white"
            size={22}
            style={{ paddingHorizontal: 20, paddingTop: 13 }}
          />

          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              width: 250,
              height: 40,
              paddingTop: 5,
              borderColor: "#6487CB"
            }}
            onPress={() => this.props.naviation.navigate("Search")}
          >
            <EvilIcons
              name="search"
              color="white"
              size={25}
              style={{ paddingTop: 10 }}
            />

            <Text
              style={{
                color: "#90AED4",
                fontSize: 17,
                paddingLeft: 8,
                paddingTop: 10
              }}
            >
              Search
            </Text>
          </TouchableOpacity>

          <Icon
            name="facebook-messenger"
            color="white"
            size={26}
            style={{ paddingLeft: 10, paddingTop: 10 }}
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <TopTabNavigator />
          <View style={{ height: 700 }} />
        </View>
      </ScrollView>
    );
  }
}

export default App;
