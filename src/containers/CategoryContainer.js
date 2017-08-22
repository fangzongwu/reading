import React, {Component} from "react";
import {TabNavigator} from "react-navigation";
import {View, Text, TouchableOpacity,} from "react-native";
import {observer} from "mobx-react";

import NewsCategory from "./../models/newsCategory";
import styles from "./style";

@observer
export default class CategoryContainer extends Component {
	static navigationOpations = {
		// title: "首页",
	};
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		NewsCategory.getCategory();
	}
	render() {
		let {typeList} = NewsCategory.showapi_res_body;
		typeList = typeList.map(list =>
				<Button
					key={list.id}
					title={list.name}
				/>
		);
		return (
			<View style={styles.container}>
				{typeList}

			</View>
		);
	}
}