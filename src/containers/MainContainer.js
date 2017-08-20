import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {observer} from "mobx-react";
import NewsCategory from "./../models/newsCategory";

@observer
class MainContainer extends Component {
	static navigationOpations = {
		title: "首页",
	}
	constructor(props) {
		super(props);
	};
	componentDidMount() {
		NewsCategory.getCategory();
	}
	render() {
		return (
			<View>  
				<Text>123 {NewsCategory.a.ab}</Text>
			</View>
		);
	}
}

export default MainContainer;