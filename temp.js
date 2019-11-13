{/* <View
          style={{
            position: "absolute",
            bottom: 55,
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: appConsumer.theme.backgroundColorSecondary,
            borderWidth: 1,
            borderColor: appConsumer.theme.backgroundColorSecondary,
            borderRadius: 2,
            padding: 5,
            flexDirection: "row"
          }}
        >
          <View>
            <Animated.Image
              source={require("../../assets/thuphuong.jpg")}
              style={{
                height: 45,
                width: 45,
                borderRadius: 22.5,
                borderWidth: 1,
                borderColor: appConsumer.theme.backgroundColorPrimary,
                resizeMode: "cover",
                transform: [{ rotate: RotateData }]
              }}
            />
          </View>
          <TouchableOpacity
          onPress={this.props.openPlayer}
            style={{
              flex: 2,
              justifyContent: "center",
              paddingLeft: 5
            }}
          >

              <MarqueeText
                style={{ flex: 1,fontSize: 14, fontFamily: "Quicksand-Bold", color: appConsumer.theme.colorPrimary}}
                duration={6000}
                marqueeOnStart
                loop
              >
                Tên Bài Hát Thật Hay
              </MarqueeText>

            <Text style={[textStyle.regular, {color: appConsumer.theme.colorSecondary}]}>Ca sĩ</Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              marginRight: 5
            }}
          >
            <MeIcon icon={mePlay} size={32} color= {appConsumer.theme.buttonColor} />
          </View>
        </View> */}