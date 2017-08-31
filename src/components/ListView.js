import React, {PropTypes} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const propTypes = {
	onPress: PropTypes.func,
	style: Text.propTypes.style,
	containerStyle: Image.propTypes.style,
	uri: PropTypes.string,
	text: PropTypes.string,
	articleText: PropTypes.string,
	timeText: PropTypes.string,
}

const ListView = ({
	onPress,
	style,
	containerStyle,
	uri,
	text,
	articleText,
	timeText,
}) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.container}>
			<Image
				style={containerStyle}
				source={{uri: uri}}
			/>
			<View style={styles.textView}>
				<Text 
					style={style}
					numberOfLines={2}
				>
					{text}
				</Text>
				<View style={styles.articleView}>
					<Text style={[styles.articleText, {color: "#3e9ce9"}]}>
						{articleText}
					</Text>
					<Text style={styles.articleText}>
						{timeText}
					</Text>
				</View>
			</View>
		</View>
	</TouchableOpacity>
)

ListView.propTypes = propTypes;

ListView.defaultProps = {
	onPress() {},

}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 8,
		paddingBottom: 8,
		borderBottomWidth: 1,
		borderColor: "#e1e1e1",
		backgroundColor: "#fff",

	},
	textView: {
		padding: 5,
		backgroundColor: "#fff",
		flex: 4,
	},
	articleView: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10, 
	},
	articleText: {
		flex: 1,
	}
})

export default ListView;
