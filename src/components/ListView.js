import React, {PropTypes} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const propTypes = {
	onPress: PropTypes.func,
	style: Text.propTypes.style,
	containerStyle: Image.propTypes.style,
	uri: PropTypes.string,
	text: PropTypes.string,
}

const ListView = ({
	onPress,
	style,
	containerStyle,
	uri,
	text,
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
 					numberOfLines={1} 
				>
					{text}
				</Text>
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
		marginBottom: 15,

	},
	textView: {
		padding: 5,
	}
})

export default ListView;
