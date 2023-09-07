import { StatusBar } from "react-native";
import { StyleSheet, Text, Image, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Feather";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon style={styles.icon} name="menu" size={30} color="white" />
      </View>
      <View style={styles.body}>
        <Image style={styles.image} source={require("./src/img1.jpg")} />
        <Text style={styles.since}>SINCE 1828</Text>
        <View style={styles.search}>
          <Icons style={styles.icon} name="search" size={30} color="#245f71" />

          <Text style={styles.searchs}>Search</Text>
        </View>
        <Image style={styles.image1} source={require("./src/img2.jpg")} />
      </View>

      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#245f71"
        translucent={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#245f71",
  },
  head: {
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "#245f71",
    alignItems: "center",
  },
  image: {
    height: 180,
    width: 180,
  },
  image1: {
    height: 250,
    width: 250,
    marginTop: 20,
  },
  since: {
    color: "white",
    fontSize: 20,
  },
  search: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 10,
    marginTop: 10,
    width: 320,
    gap: 10,
  },
  searchs: {
    color: "#245f71",
    fontSize: 20,
  },
});
