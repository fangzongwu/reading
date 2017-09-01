import React, {Component} from "react";
import {observer} from "mobx-react";
import {TabNavigator} from "react-navigation";
import {View, Text, Image, ListView, RefreshControl} from "react-native";

import styles from "./style";
import NewsCategory from "./../models/newsCategory";

@observer
export default class Feedback extends Component {
	static navigationOpations = {
		title: "幽默",
	}
	constructor(props) {
		super(props);
		this.state = {
			isRefreshing: false,
		}
	};
	componentDidMount() {
		NewsCategory.getFunnyImgUri().then(() => {
			this.setState({
				isRefreshing: false,
			})
		});
	}
	_onRefresh = () => {
		this.setState({
			isRefreshing: true,
		})
		NewsCategory.getFunnyImgUri().then(() => {
			this.setState({
				isRefreshing: false,
			})
		});
	}
	render() {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		let { list } = NewsCategory.showapi_res_image_body;
		list = list.slice();
		const data = ds.cloneWithRows(list);
		const listes = list.map((li) => {
				<View key={li.class}>
					<Image 
						style={{height: 400}} 
						source={{uri: li.thumburl}} 
					/>
					<Text>{li.title}</Text>
				</View>
		})
		return (
			<View>
				<ListView
					dataSource={data}
					renderRow={(rowData) => (
						<View key={rowData.class} style={[styles.container, styles.smailBlock]}>
							<Image 
								style={{ height: parseInt(rowData.height)}} 
								source={{uri: rowData.thumburl}} 
							/>
							<Text style={styles.smailText}>{rowData.title}</Text>
						</View>
					)}
					refreshControl={
						<RefreshControl 
							refreshing={this.state.isRefreshing}
							onRefresh={this._onRefresh}
							color={["#649BBF", "#86CFFF"]}
							tintColor="#86CFFF"
							title="释放刷新..."
						/>
					}
				/>
			</View>
		);
	}
}