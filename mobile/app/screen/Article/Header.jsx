import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ratioH, ratioW } from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";
import Icons from "../../../constants/Icons";
import { useNavigation } from "@react-navigation/native";
import Tts from "react-native-tts";
import { SampleContext } from "../../../context/SampleContext";

const Header = ({ onSpeech, onHighlight }) => {
	const { fontScale, updateFontScale, isDarkMode } = useContext(SampleContext);
	const navigation = useNavigation();

	return (
		<View style={styles.header}>
			<TouchableOpacity
				style={styles.iconBack}
				onPress={() => {
					Tts.stop();
					navigation.goBack();
				}}
			>
				<Icons.Back  />
			</TouchableOpacity>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={onSpeech}>
					<LinearGradient
						colors={["#ff3a44", "#ff8086"]}
						style={styles.iconSpeech}
					>
						<Icons.Speech />
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={onHighlight}>
					<LinearGradient
						colors={["#ff3a44", "#ff8086"]}
						style={styles.iconSpeech}
					>
						<Icons.HighLight />
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {
					updateFontScale(fontScale - 0.1);
				}}>
					<LinearGradient
						colors={["#ff3a44", "#ff8086"]}
						style={styles.iconSpeech}
					>
						<Text style={[styles.textButton]}>-</Text>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {
					updateFontScale(fontScale + 0.1);
				}}>
					<LinearGradient
						colors={["#ff3a44", "#ff8086"]}
						style={styles.iconSpeech}
					>
						<Text style={[styles.textButton]}>+</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: ratioW(375),
		height: ratioH(64),
		flexDirection: "row",
		alignItems: "center",
	},
	iconBack: {
		width: ratioH(30),
		height: ratioH(30),
		alignItems: "center",
		justifyContent: "center",
		marginLeft: ratioH(16),
	},
	buttonContainer: {
		position: "absolute",
		right: ratioH(12),
		flexDirection: "row",
		justifyContent: "space-between",
	},
	iconSpeech: {
		width: ratioH(36),
		height: ratioH(36),
		borderRadius: ratioW(8),
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: ratioW(6),
	},
	textButton: {
		fontSize: ratioH(16),
		fontWeight: "700",
		color: "white",
	},
});

export default Header;
