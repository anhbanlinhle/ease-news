import React, { useEffect, useState, useRef } from "react";
import {
	View,
	StyleSheet,
	SafeAreaView,
	Image,
	Text,
	TouchableOpacity,
	ScrollView, Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatTimestamp, ratioH, ratioW } from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";
import Header from "./Header";
import Tts from "react-native-tts";

const ArticleScreen = ({ route }) => {
	const navigation = useNavigation();
	const { author, categories, content, summary, cover, timestamp, title } =
		route.params;

	const NO_WIDTH_SPACE = " ";

	const [currentIndex, setCurrentIndex] = useState(0);

	const coloredTextRef = useRef([]);
	const currentWordRef = useRef(null);
	const nonColoredTextRef = useRef(content ? content.split(" ") : []);

	const previousEndRef = useRef(null);

	useEffect(() => {
		Tts.setDefaultLanguage("vi-VN");
		Tts.setDefaultRate(0.6, true);

		const handleTtsProgress = (event) => {
			const end = Platform.OS === 'ios' ? event?.location : event?.end;
			if (end !== previousEndRef.current) {
				previousEndRef.current = end;

				coloredTextRef.current.push(currentWordRef.current?.trim());
				currentWordRef.current = " " + nonColoredTextRef.current[0];
				nonColoredTextRef.current = nonColoredTextRef.current.slice(1, nonColoredTextRef.current.length);
				setCurrentIndex((prev) => prev + 1);
			}
		};

		Tts.addEventListener("tts-progress", handleTtsProgress);
	}, [content, currentIndex]);

	const highlightReduplication = (content) => {
		return content.result.map((item, i) => (
			<Text key={i}>
				<Text style={item.reduplication ? styles.highlightReduplication : null}>
					{item.phrase}
				</Text>
				{NO_WIDTH_SPACE}
			</Text>
		));
	};

	//TODO: call api to get the reduplication response
	const renderContent = () => {
		const testContentJson = {
			result: [
				{
					phrase: "Tôi thật",
					reduplication: false,
				},
				{
					phrase: "ái ngại",
					reduplication: true,
				},
				{
					phrase: "khi phải từ chối lời mời đáng",
					reduplication: false,
				},
				{
					phrase: "ái ngại",
					reduplication: true,
				},
				{
					phrase: "của anh",
					reduplication: false,
				},
			],
		};

		return (
			<ScrollView bounces={false} contentContainerStyle={styles.content}>
				<Image source={{ uri: cover }} style={styles.cover} />
				<View style={styles.mainContent}>
					<LinearGradient
						colors={["rgba(160, 160, 160, 1)", "rgba(245, 245, 245, 1)"]}
						style={styles.heading}
					>
						<Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.author}>Đăng bởi {author}</Text>
					</LinearGradient>
					<Text style={styles.contentText}>
						<Text style={styles.previousWord}>{coloredTextRef?.current?.join(" ")}</Text>
						<Text style={styles.currentWord}>{currentWordRef?.current}</Text>
						<Text> {nonColoredTextRef?.current?.join(" ")}</Text>
					</Text>
				</View>
			</ScrollView>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header onSpeech={() => Tts.speak(content)} />
			{renderContent()}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	cover: {
		width: ratioW(375),
		height: ratioH(285),
	},
	content: {},
	heading: {
		width: ratioW(311),
		marginTop: ratioH(-64),
		borderRadius: ratioW(16),
		paddingHorizontal: ratioW(24),
	},
	title: {
		fontSize: ratioH(18),
		fontWeight: "400",
		marginTop: ratioH(12),
	},
	timestamp: {
		fontSize: ratioH(16),
		marginTop: ratioH(20),
		fontWeight: "400",
	},
	author: {
		marginTop: ratioH(8),
		fontWeight: "800",
		marginBottom: ratioH(16),
	},
	mainContent: {
		width: ratioW(375),
		borderTopLeftRadius: ratioW(16),
		borderTopRightRadius: ratioW(16),
		marginTop: ratioH(-20),
		backgroundColor: "white",
		alignItems: "center",
		flexDirection: "column",
	},
	contentText: {
		fontSize: ratioH(14),
		fontWeight: "400",
		margin: ratioW(16),
		textAlign: "justify",
		textAlignVertical: "center",
	},
	highlightReduplication: {
		backgroundColor: "yellow",
	},
	currentWord: {
		backgroundColor: "lightblue",
	},
	previousWord: {
		backgroundColor: "lightgray",
	},
});

export default ArticleScreen;
