import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
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
	render() {
		return (
			<ScrollableTabView renderBar={() => <DefaultTabBar />}>
				<Text tabLabel="体育迷">体育迷</Text>
				<Text tabLabel="段子手">段子手</Text>
				<Text tabLabel="养生堂">养生堂</Text>
				<Text tabLabel="私房话">私房话</Text>
				<Text tabLabel="八卦精">八卦精</Text>
			</ScrollableTabView>
		);
	}
}

export default MainContainer;