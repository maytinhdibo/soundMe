import React, {PureComponent} from 'react'
import {
	View,
	Text,
	Keyboard,
	TouchableWithoutFeedback,
	TouchableOpacity, 
	Dimensions,
	StyleSheet
} from 'react-native'
// import Header from './components/layout/header' // Irrelavent
// import styles from './example.stylesheet'
//import {Icon} from 'react-native-elements'
// import Button from './components/elements/button' // irrelevant 
import NextTextInput from 'react-native-next-input'
import KeyboardViewSpacer from 'react-native-keyboard-view-space'
class OtpVerification extends PureComponent {
	constructor(props) {
		super(props)
		//this.phoneInstance = this.props.navigation.state.params.phoneInstance
	}


	verifyOTP = value => {
		
	}

	otpInputHandler = (combinedValueArray, currentValue, refForTheCurrentValue) => {
		console.log(combinedValueArray, currentValue, refForTheCurrentValue)
	}

	render() {
		return (
			<KeyboardViewSpacer>
				{/* <View>
					leftComponent={
						<TouchableOpacity
							style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
							onPress={() => this.props.navigation.goBack()}
						>
							<Icon size={30} name="chevron-left" />
							<Text>{'back'}</Text>
						</TouchableOpacity>
					}
					centerComponent={<View></View>}
					rightComponent={<View></View>}
					navigation={this.props.navigation}
				</View> */}
				<TouchableWithoutFeedback style={styles.touchableKeyboardCloser} onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<Text style={[styles.title]}>Vui lòng nhập mã code </Text>
						<NextTextInput
							noOfTextInput={6}
							textInputStyle={styles.textBox}
							onChangeValue={this.otpInputHandler}
							parentViewStyle={styles.textBoxes}
						/>
						
							{/* <Button
								btnType={6}
								colorType={3}
								btnText={'Verify OTP'}
								onPress={() => this.verifyOTP()}
								btnStyle={{
									borderColor: 'white',
									marginTop: (Dimensions.get('window').height * 10) / 100
								}}
							/> */}
							<TouchableOpacity
								style={styles.button}
								onPress={() => this.props.navigation.navigate("AppNavigator")}
							>
								<Text style={styles.buttonText}>Tiếp tục</Text>
							</TouchableOpacity>
						
					</View>
				</TouchableWithoutFeedback>
			</KeyboardViewSpacer>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	textBoxes: {
		width: Dimensions.get('window').width,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textBox: {
		borderWidth: 0.5,
		borderColor: 'black',
		width: 50,
		height: 50,
		borderRadius: 5,
		fontSize: 25,
		marginLeft: 5,
		marginRight: 5,
		textAlign: 'center'
	},
	centerButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button:{
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#485a96',
		borderWidth: 0.5,
		borderColor: '#fff',
		height: 45,
		width: 350,
		borderRadius: 30,
		marginTop: 50,
		margin: 3,
	},
	buttonText:{
		flex: 1,
		color: '#fff',
		fontSize: 16,
		textAlign: 'center',
		paddingVertical:10,
	}
});

export default OtpVerification
