import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
	const navigation = useNavigation();

	const [username, setUsername] = useState("");
	const [colorblindState, setColorblindState] = useState("");
	const [phoneNo, setPhoneNo] = useState("");
	const [age, setAge] = useState("");
	const [defaultSize, setDefaultSize] = useState("");

	const handleSignup = () => {
		navigation.navigate("Home");
		console.log("Signup button pressed");
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Image
					source={require("../../assets/images/login_icon.png")}
					style={styles.image}
				/>
				<Text style={styles.title}>EaseNews</Text>
			</View>
			<View styles={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Tên hiển thị"
					value={username}
					onChangeText={setUsername}
				/>
				<TextInput
					style={styles.input}
					placeholder="Tình trạng mù màu"
					value={colorblindState}
					onChangeText={setColorblindState}
				/>
				<TextInput
					style={styles.input}
					placeholder="Số điện thoại"
					value={phoneNo}
					onChangeText={setPhoneNo}
				/>
				<TextInput
					style={styles.input}
					placeholder="Độ tuổi"
					value={age}
					onChangeText={setAge}
				/>
				<TextInput
					style={styles.input}
					placeholder="Kích cỡ mặc định"
					value={defaultSize}
					onChangeText={setDefaultSize}
					keyboardType="phone-pad"
				/>
				<TouchableOpacity onPress={handleSignup}>
					<LinearGradient
						colors={["#FF8086", "#FF3A44"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={styles.signupButton}
					>
						<Text style={styles.signupButtonText}>Đăng ký</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
	headerContainer: {
		flexDirection: "column",
		height: Dimensions.get("window").height * 0.1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	inputContainer: {
		flexDirection: "column",
		height: Dimensions.get("window").height * 0.9,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: Dimensions.get("window").width * 0.45,
		height: Dimensions.get("window").height * 0.12,
	},
	title: {
		fontSize: 34,
		fontWeight: "bold",
		marginBottom: 20,
		marginTop: 0,
	},
	input: {
		width: Dimensions.get("window").width * 0.85,
		height: 50,
		borderColor: "#c0c0c0",
		borderWidth: 2,
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingLeft: 15,
		marginBottom: 25,
	},
	signupButton: {
		width: Dimensions.get("window").width * 0.85,
		height: 50,
		backgroundColor: "#4285F4",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	signupButtonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default RegisterScreen;
