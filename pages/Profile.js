import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Switch,
  Image,
  AsyncStorage,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { getStatusBarHeight } from "react-native-status-bar-height";

import AndroidDialogPicker from "react-native-android-dialog-picker";
import { textStyle } from "../styles/textStyle";
const theme = ["Sáng", "Tối", "Tự động"];
import { AppConsumer, ThemeContext } from "../AppContextProvider";
import MeIcon from "../icons/MeIcon";
import meCheck from "../icons/icon-pack/meCheck";
import CheckBox from "../components/common/CheckBox";
import CardView from "react-native-cardview";
import { commonStyle } from "../styles/commonStyle";
import meLeaf from "../icons/icon-pack/meLeaf";
import meHeart from "../icons/icon-pack/meHeart";
import meLogout from "../icons/icon-pack/meLogout";
import meMoon from "../icons/icon-pack/meMoon";
import meSun from "../icons/icon-pack/meSun";
import meSunMoon from "../icons/icon-pack/meSunMoon";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const ThemeIcons = [meMoon, meSun, meSunMoon];
class ThemeChooseItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, value } = this.props;
    return (
      <AppConsumer>
        {appConsumer => (
      <TouchableOpacity onPress={()=>{this.props.closePanel()}}>
      <View style={{ marginHorizontal: 16, alignItems: "center" }}>
        <View
          style={{
            padding: 12,
            borderRadius: 28,
            backgroundColor: "rgba(111,111,111,0.3)",
            marginBottom: 2
          }}
        >
          <MeIcon size={20} color={"#fff"} icon={ThemeIcons[value]} />
        </View>
        <Text style={[{ color: "#fff", fontSize: 13 }, textStyle.medium]}>
          {title}
        </Text>
      </View>
      </TouchableOpacity>
        )}
        </AppConsumer>
    );
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      theme: 0,
      switchValue: true,
      themePanel:false
    };
  }
  componentDidMount = async () => {
    const currentTheme = await AsyncStorage.getItem("theme");
    if (currentTheme != null) {
      this.setState({ theme: currentTheme });
    }
  };
  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.backgroundColorPrimary,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 12,
                paddingRight: 9,
                marginBottom: 2,
                paddingTop: getStatusBarHeight(),
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    { color: appConsumer.theme.colorPrimary },
                    commonStyle.header,
                    textStyle.bold,
                  ]}
                >
                  Cài đặt
                </Text>
              </View>
            </View>
            <CardView
              style={{
                height: 75,
                backgroundColor: appConsumer.theme.backgroundColorSecondary,
                margin: 15,
                alignItems: "center",
                padding: 9,
                flexDirection: "row",
              }}
              cornerRadius={12}
              cardElevation={2}
            >
              <Image
                source={{
                  uri:
                    "https://i.scdn.co/image/7be436d24a08969d8724edc8c0e290a4b5624fff",
                }}
                style={{
                  height: 60,
                  width: 60,
                  resizeMode: "cover",
                  borderRadius: 9,
                }}
              />
              <View style={{ padding: 9, flex: 1 }}>
                <Text
                  style={[
                    textStyle.bold,
                    { fontSize: 15, color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Cường Trần
                </Text>
                <Text
                  style={{
                    color: appConsumer.theme.colorPrimary,
                    opacity: 0.75,
                  }}
                >
                  iammaytinhdibo@gmail.com
                </Text>
              </View>
              <MeIcon
                size={23}
                icon={meLogout}
                color={appConsumer.theme.buttonColor}
              />
            </CardView>

            <Text
              style={[
                {
                  marginLeft: 15,
                  fontSize: 20,
                  paddingVertical: 9,
                  color: appConsumer.theme.colorPrimary,
                },
                textStyle.bold,
              ]}
            >
              Hệ thống
            </Text>

            <View
              style={{
                marginHorizontal: 15,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({themePanel:!this.state.themePanel});
                  // if (Platform.OS === "android") {
                  //   AndroidDialogPicker.show(
                  //     {
                  //       title: "Choose your theme...",
                  //       items: theme,
                  //       cancelText: "Cancel",
                  //     },
                  //     async buttonIndex => {
                  //       this.setState({ theme: buttonIndex });
                  //       appConsumer.setTheme(buttonIndex);
                  //       await AsyncStorage.setItem(
                  //         "theme",
                  //         buttonIndex.toString()
                  //       );
                  //       if (buttonIndex == 1) {
                  //         StatusBar.setBarStyle("light-content");
                  //       } else {
                  //         StatusBar.setBarStyle("dark-content");
                  //       }
                  //     }
                  //   );
                  // } else {
                  //   ActionSheetIOS.showActionSheetWithOptions(
                  //     {
                  //       title: "Test",
                  //       options: ["item1", "item2", "Cancel"],
                  //       cancelButtonIndex: 2,
                  //     },
                  //     buttonIndex => {
                  //       console.log(buttonIndex);
                  //     }
                  //   );
                  // }
                }}
                style={[
                  listStyle.item,
                  {
                    backgroundColor: appConsumer.theme.backgroundColorSecondary,
                  },
                ]}
              >
                <View>
                  <Text
                    style={[
                      listStyle.label,
                      textStyle.medium,
                      { color: appConsumer.theme.colorPrimary },
                    ]}
                  >
                    Giao diện
                  </Text>
                </View>
                <View style={listStyle.action}>
                  <Text
                    style={[
                      textStyle.regular,
                      { color: appConsumer.theme.colorPrimary },
                    ]}
                  >
                    {theme[this.state.theme]}
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  display:this.state.themePanel?"flex":"none",
                  flexDirection: "row",
                  padding: 12,
                  marginTop:-2,
                  justifyContent: "center",
                  backgroundColor: appConsumer.theme.backgroundColorSecondary,
                }}
              >
                <ThemeChooseItem closePanel={()=>this.setState({themePanel: false})} title={"Tối"} value={0} />
                <ThemeChooseItem closePanel={()=>this.setState({themePanel: false})} title={"Tự động"} value={2} />
                <ThemeChooseItem closePanel={()=>this.setState({themePanel: false})} title={"Sáng"} value={1} />
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
                style={[
                  listStyle.item,
                  {
                    backgroundColor: appConsumer.theme.backgroundColorSecondary,
                  },
                ]}
              >
                <Text
                  style={[
                    listStyle.label,
                    textStyle.medium,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Đăng nhập
                </Text>
              </TouchableOpacity>

              <View
                style={[
                  listStyle.item,
                  {
                    backgroundColor: appConsumer.theme.backgroundColorSecondary,
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    listStyle.label,
                    textStyle.medium,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Thông báo đẩy
                </Text>
                <Switch
                  trackColor={{
                    false: "rgba(0,0,0,0.1)",
                    true: "rgba(200,41,45,0.2)",
                  }}
                  thumbColor={appConsumer.theme.buttonColor}
                  style={{
                    marginRight: -6,
                  }}
                  value={this.state.switchValue}
                  onValueChange={value => {
                    this.setState({ switchValue: value });
                  }}
                ></Switch>
              </View>

              <TouchableOpacity
                style={[
                  listStyle.item,
                  {
                    backgroundColor: appConsumer.theme.backgroundColorSecondary,
                  },
                ]}
              >
                <Text
                  style={[
                    listStyle.label,
                    textStyle.medium,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Xóa lịch sử tìm kiếm
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={[
                {
                  marginLeft: 15,
                  fontSize: 20,
                  paddingVertical: 9,
                  color: appConsumer.theme.colorPrimary,
                },
                textStyle.bold,
              ]}
            >
              Thông tin
            </Text>

            <View
              style={{
                marginHorizontal: 15,
                borderRadius: 12,
                marginBottom:12,
                overflow: "hidden",
              }}
            >
              <TouchableOpacity
                style={[
                  listStyle.item,
                  {
                    backgroundColor: appConsumer.theme.backgroundColorSecondary,
                  },
                ]}
              >
                <Text
                  style={[
                    listStyle.label,
                    textStyle.medium,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Điều khoản sử dụng
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  listStyle.item,
                  {
                    backgroundColor: appConsumer.theme.backgroundColorSecondary,
                  },
                ]}
              >
                <Text
                  style={[
                    listStyle.label,
                    textStyle.medium,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Đội ngũ phát triển
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  listStyle.item,
                  {
                    backgroundColor: appConsumer.theme.backgroundColorSecondary,
                  },
                ]}
              >
                <Text
                  style={[
                    listStyle.label,
                    textStyle.medium,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Góp ý, báo lỗi
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  listStyle.item,
                  {
                    backgroundColor: appConsumer.theme.backgroundColorSecondary,
                  },
                ]}
              >
                <Text
                  style={[
                    listStyle.label,
                    textStyle.medium,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Phiên bản
                </Text>

                <View style={listStyle.action}>
                  <Text
                    style={[
                      textStyle.regular,
                      { color: appConsumer.theme.colorPrimary },
                    ]}
                  >
                    1.0.1
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </AppConsumer>
    );
  }
}

const listStyle = StyleSheet.create({
  item: {
    padding: 12,
    marginBottom: 0.5,
    flexDirection: "row",
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  action: {
    flex: 1,
    flexDirection: "row-reverse",
  },
});
export default withNavigation(Profile);
