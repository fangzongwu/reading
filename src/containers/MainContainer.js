import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import Icon from "react-native-vector-icons/FontAwesome";
import {observer} from "mobx-react";

import NewsCategory from "./../models/newsCategory";
import ListView from "./../components/ListView";

@observer
class MainContainer extends Component {
	static navigationOpations = {
		title: "首页",
	}
	constructor(props) {
		super(props);
	};
	componentDidMount() {
		NewsCategory.getCategoryDetaile(19);
	}
	render() {
		const {contentlist} = NewsCategory.showapi_res_detaile_body;
		const categoryList = contentlist.map((list) => {
			return (
				<ListView
					key={list.id} 
					text={list.title}
					uri='https://mmbiz.qpic.cn/mmbiz_jpg/M3knBiaKag9vQtAsPUHQEj1YFPzdL6TTiadkLWfrBia7eNvia0MLpFH01YoqNx54vwXZmyBCEULLFTGGTYwGmtyW1Q/0?wx_fmt=jpeg'
					containerStyle={{width: 60, height: 60}}
				/>
			);
		})
		return (
			<ScrollableTabView renderBar={() => <DefaultTabBar />}>
				<View tabLabel="体育迷">
					{categoryList}
				</View>
			</ScrollableTabView>
		);
	}
}

export default MainContainer;