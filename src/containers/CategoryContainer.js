import React, {Component} from "react";
import {TabNavigator} from "react-navigation";
import {
	View, 
	Text, 
	Alert, 
	ScrollView, 
	RefreshControl
} from "react-native";
import {observer} from "mobx-react";

import NewsCategory from "./../models/newsCategory";
import Button from "./../components/Button";
import GridView from "./../components/GridView";
import styles from "./style";

@observer
export default class CategoryContainer extends Component {
	static navigationOpations = {
		// title: "首页",
	};
	constructor(props) {
		super(props);
		// this.onRefresh = this.onRefresh.bind(this);
		this.state = {
			isLoading: false,
		}
	}
	componentDidMount() {
		NewsCategory.getCategory();
	}
	renderGridView = () => {
		return (
			<ScrollView 
				automaticallyAdjustContentInsets={false}
				horizontal={false}
				contentContainerStyle={styles.no_data}
				style={styles.base}
				refreshControl={
					<RefreshControl 
						refreshing={this.state.isLoading}
						// onRefresh={this.onRefresh}
						title="Loading..."
						colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
					/>
				}
			>
				<View>
					<Text>123</Text>
				</View>
			</ScrollView>
		);
	}
	render() {
		let {typeList} = NewsCategory.showapi_res_body;
		typeList = typeList.map(list =>
				<Button
					key={list.id} 
					text={list.name}
					// onPress={() => Alert.alert("haah")}
					style={{color: "#20CFC9"}}
				/>
		);
		return (
			<View style={styles.container}>
				<View style={styles.heard}>
					<Text style={styles.textBtn}>请选择您感兴趣的1-5个类别</Text>
				</View>
				{this.renderGridView()}
				{typeList}
			</View>
		);
	}
}