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
	componentDidMount() {
		NewsCategory.getCategory();
	}
	render() {
		const {typeList} = NewsCategory.showapi_res_body;
		const content = typeList.map(list => {
			return (
				<Text tabLabel="12">12</Text>
			);
		})
		return (
			<ScrollableTabView renderBar={() => <DefaultTabBar />}>
				
			</ScrollableTabView>
		);
	}
}

export default MainContainer;