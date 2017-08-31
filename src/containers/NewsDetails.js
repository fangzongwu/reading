import React, {Component} from "react";
import {
	View,
	Text,
	WebView,
} from "react-native";

export default class NewsDetails extends Component {
	static navigationOptions = {
		title: "新闻详情"
	}
	constructor(props) {
		super(props);
	}
	render() {
		const {state} = this.props.navigation;
		return (
				<WebView
					source={{uri: state.params.newsData}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
				/>
		);
	}
}