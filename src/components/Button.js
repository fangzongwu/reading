import React, { PropTypes } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	style: Text.propTypes.style,
	containerStyle: View.propTypes.style,
	text: PropTypes.string,
	activeOpacity: PropTypes.number,
};

const Button = ({
	onPress,
	disabled,
	style,
	containerStyle,
	text,
	activeOpacity
}) => (
	<TouchableOpacity
		style={containerStyle}
		onPress={onPress}
		disabled={disabled}
		activeOpacity={activeOpacity}
	>
		<Text style={style}>
			{text}
		</Text>
	</TouchableOpacity>
)

Button.propTypes = propTypes;

Button.defaultProps = {
	onPress() {},
	disabled: false,
	activeOpacity: 0.8
}

export default Button;