import React, {Component} from "react";
import {TabNavigator} from "react-navigation";
import {View, Text} from "react-native";

export default class CategoryContainer extends Component {
	static navigationOpations = {
		title: "首页",
	}
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<View>
				<Text>456</Text>
			</View>
		);
	}
}