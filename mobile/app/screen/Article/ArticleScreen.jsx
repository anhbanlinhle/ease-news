import React, { useEffect, useState, useRef, useContext } from "react";
import {
	View,
	StyleSheet,
	SafeAreaView,
	Image,
	Text,
	TouchableOpacity,
	ScrollView,
	Platform,
	Button,
	Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatTimestamp, ratioH, ratioW } from "../../../utils/converter";
import LinearGradient from "react-native-linear-gradient";
import Header from "./Header";
import RedupModal from "./RedupModal";
import Tts from "react-native-tts";
import { getReduplicationInNewsAction, getReduplicationDetailAction, getSummaryTextAction } from "../../../redux/reducers/newsSlice";
import { useDispatch } from "react-redux";
import Fonts from "../../../constants/Fonts";
import ContentSkeleton from "./ContentSkeleton";
import { SampleContext } from '../../../context/SampleContext';

const ArticleScreen = ({ route }) => {
	const { isDarkMode, fontScale } = useContext(SampleContext);
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { author, categories, content, summary, cover, timestamp, title } =
		route.params;

	const NO_WIDTH_SPACE = " ";
	const [isLoading, setIsLoading] = useState(false);
	const [isShowSummary, setIsShowSummary] = useState(false);
	const [summaryText, setSummaryText] = useState(null);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [highlightedText, setHighlightedText] = useState(null);

	const coloredTextRef = useRef([]);
	const currentWordRef = useRef(null);
	const nonColoredTextRef = useRef(content ? content.split(" ") : []);
	const previousEndRef = useRef(null);

	const [isShowReduplication, setIsShowReduplication] = useState(false);
	const [isSpeaking, setIsSpeaking] = useState(false);

	const redupModalRef = useRef(null);

	const getReduplicationForContent = (content) => {
		dispatch(
			getReduplicationInNewsAction({
				content: content,
				onSuccess: (data) => {
					setHighlightedText(data.results);
				},
				onFail: (error) => console.log("Get reduplication failed", error)
			})
		);
	};

	useEffect(() => {
		getReduplicationForContent(content);
		Tts.setDefaultLanguage("vi-VN");
		Tts.setDefaultRate(0.6, true);

		const handleTtsProgress = (event) => {
			const end = Platform.OS === "ios" ? event?.location : event?.end;
			if (end !== previousEndRef.current && nonColoredTextRef.current.length > 0) {
				previousEndRef.current = end;

				coloredTextRef.current.push(currentWordRef.current?.trim());
				currentWordRef.current = " " + nonColoredTextRef.current[0];
				nonColoredTextRef.current = nonColoredTextRef.current.slice(
					1,
					nonColoredTextRef.current.length
				);
				setCurrentIndex((prev) => prev + 1);
			}
		};

		Tts.addEventListener("tts-progress", handleTtsProgress);
	}, [content, currentIndex]);

	useEffect(() => {
		if (isSpeaking) {
			setIsShowReduplication(false);
			Tts.speak(content);
			Tts.resume();
		}
		else {
			Tts.pause();
		}
	}, [isSpeaking]);

	useEffect(() => {
		if (isShowReduplication) {
			Tts.stop();
			nonColoredTextRef.current = content.split(" ");
			coloredTextRef.current = [];
			currentWordRef.current = null;
			setCurrentIndex(0);
		}
	}, [isShowReduplication]);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, [])

	const renderOriginalText = () => {
		return (
			<>
				<Text style={styles.previousWord}>
					{coloredTextRef?.current?.join(" ")}
				</Text>
				<Text style={styles.currentWord}>{currentWordRef?.current}</Text>
				<Text> {nonColoredTextRef?.current?.join(" ")}</Text>
			</>
		);
	};

	const handleOpenRedupModal = (text) => {
		dispatch(getReduplicationDetailAction({
			phrase: text,
			onSuccess: (data) => {
				redupModalRef.current.show(data?.[0]);
			},
			onFail: (error) => console.log("Get reduplication detail failed", error)
		}))
	}

	const renderDuplicateHighlightedText = () => {
		if (!highlightedText) {
			return content;
		}
		return (
			<Text>
				{highlightedText.map((item, index) => {
					const textElement = (
						<Text key={index}>
							<Text
								style={item.reduplication ? styles.highlightReduplication : null}
								onPress={
									item.reduplication
									? () => handleOpenRedupModal(item.phrase)
									: null
								}
							>
								{item.phrase}
							</Text>
							{NO_WIDTH_SPACE}
						</Text>
					);
					return textElement;
				})}
			</Text>
		);
	};

	const handleGetSummary = () => {
		if (!summaryText) {
			setIsLoading(true);
			dispatch(getSummaryTextAction({
				text: content,
				onSuccess: (data) => {
					setSummaryText(data?.reply);
					setIsLoading(false);
					setIsShowSummary(true);
				},
				onFail: (error) => {
					console.log("Get summary failed", error);
					setIsLoading(false);
				}
			}))
		}
		else {
			setIsShowSummary(!isShowSummary);
		}
	}

	const renderHeading = () => {
		return (
			<TouchableOpacity
				activeOpacity={0.9}
				onLongPress={() => {
					handleGetSummary();
				}}
			>
				<LinearGradient
					colors={isDarkMode ? ["rgba(160, 160, 160, 1)", "rgba(245, 245, 245, 1)"] : ["rgba(245, 245, 245, 1)","rgba(160, 160, 160, 1)"]}
					style={styles.heading}
				>
					{isLoading ? <Text style={styles.loadingText}>Đang tải nội dung...</Text> :
						<>
							<Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.author}>Đăng bởi {author}</Text>
						</>
					}
				</LinearGradient>
			</TouchableOpacity>
		)
	}

	const renderSummary = () => {
		return (
			<Text style={styles.summaryText}>Tóm tắt: {summaryText}</Text>
		)
	}

	const renderContent = () => {
		return (
			<ScrollView bounces={false} contentContainerStyle={styles.content}>
				<Image source={{ uri: cover }} style={styles.cover} />
				<View style={[styles.mainContent,
					{backgroundColor: isDarkMode ? '#28231d' : '#ffffff'}
				]}>
					{renderHeading()}
					{isLoading ? <ContentSkeleton /> :
						isShowSummary ? renderSummary() :
						<Text style={[styles.contentText,
							{color: isDarkMode ? '#ffffff' : '#000000',
								fontSize: ratioH(14 * fontScale),
							}
						]}>
							{isShowReduplication
								? renderDuplicateHighlightedText()
								: renderOriginalText()}
						</Text>
					}
				</View>
			</ScrollView>
		);
	};

	return (
		<SafeAreaView style={[styles.container,
			{backgroundColor: isDarkMode ? '#28231d' : '#ffffff'}
		]}>
			<Header
				onSpeech={() => {
					setIsSpeaking(!isSpeaking);
					setIsShowSummary(false);
				}}
				onHighlight={() => {
					setIsShowReduplication(!isShowReduplication)
					setIsShowSummary(false);
				}}
			/>
			{renderContent()}
			<RedupModal ref={redupModalRef} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	cover: {
		width: ratioW(375),
		height: ratioH(245),
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
		...Fonts.bold,
		marginTop: ratioH(12),
	},
	timestamp: {
		fontSize: ratioH(16),
		marginTop: ratioH(20),
		...Fonts.boldItalic,
	},
	author: {
		marginTop: ratioH(8),
		...Fonts.black,
		marginBottom: ratioH(16),
	},
	mainContent: {
		width: ratioW(375),
		borderTopLeftRadius: ratioW(16),
		borderTopRightRadius: ratioW(16),
		marginTop: ratioH(-20),
		alignItems: "center",
		flexDirection: "column",
	},
	contentText: {
		fontSize: ratioH(14),
		...Fonts.medium,
		margin: ratioW(16),
		textAlign: "justify",
		textAlignVertical: "center",
	},
	summaryText: {
		fontSize: ratioH(16),
		...Fonts.mediumItalic,
		margin: ratioW(16),
		textAlign: "justify",
		textAlignVertical: "center",
	},
	highlightReduplication: {
		backgroundColor: "pink",
	},
	currentWord: {
		backgroundColor: "lightblue",
	},
	previousWord: {
		backgroundColor: "lightgray",
	},
	loadingText: {
		fontSize: ratioH(16),
		...Fonts.mediumItalic,
		margin: ratioW(16),
	},
});

export default ArticleScreen;
