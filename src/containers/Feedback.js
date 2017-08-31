import React, {Component} from "react";
import {observer} from "mobx-react";
import {TabNavigator} from "react-navigation";
import {View, Text, Image} from "react-native";
import NewsCategory from "./../models/newsCategory";

@observer
export default class Feedback extends Component {
	static navigationOpations = {
		title: "首页",
	}
	constructor(props) {
		super(props);
	};
	componentDidMount() {
		NewsCategory.getFunnyImgUri();
	}
	renderList() {
		
	}
	render() {
		let { list } = NewsCategory.showapi_res_image_body;
		list = list.slice();
		const listes = list.map((li) => {
			return(
				<View key={li.class}>
					<Image 
						style={{height: 400}} 
						source={{uri: li.thumburl}} 
					/>
					<Text>{li.title}</Text>
				</View>
			);
		})
		return (
			<View>
				{listes}
			</View>
		);
	}
}