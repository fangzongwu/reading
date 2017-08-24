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

let tempTypeIds = [];

@observer
export default class CategoryContainer extends Component {
	static navigationOpations = {
		// title: "分类",
	};
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			typeIds: tempTypeIds
		}
	}
	componentDidMount() {
		NewsCategory.getCategory();
	}
	onPress = (type) => {
		const pos = tempTypeIds.indexOf(parseInt(type.id));
		if(pos === -1) {
			tempTypeIds.push(parseInt(type.id));
		}else{
			tempTypeIds.splice(pos, 1);
		}
		this.setState({
			typeIds: tempTypeIds,
		});
	}
	renderItem = (item) => {
		const isSelect = Array.from(this.state.typeIds).indexOf(parseInt(item.id)) !== -1;
			return (
				<Button 
					key={item.id}
					containerStyle={[
						styles.categoryBtn,
						isSelect ? {backgroundColor: "#20CFC9"} : {backgroundColor: "#fcfcfc"}
					]}
					style={[
						styles.categoryText,
						isSelect ? {color: "#fcfcfc"} : {color: "black"}
					]}
					text={item.name}
					onPress={() => {this.onPress(item)}}
				/>
			);
	}
	renderGridView = () => {
		let {typeList} = NewsCategory.showapi_res_body;
		return (
			<ScrollView 
				automaticallyAdjustContentInsets={false}
				horizontal={false}
				contentContainerStyle={styles.no_data}
				style={styles.base}
				refreshControl={
					<RefreshControl 
						refreshing={this.state.isLoading}
						title="Loading..."
						colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
					/>
				}
			>
				<View>
					<GridView
						items={Array.from(typeList)}
            			itemsPerRow={3}
						renderItem={this.renderItem}
						style={{alignSelf: "center"}}
					/>
				</View>
			</ScrollView>
		);
	}
	render() {
		const {params} = this.props.navigation.state;
		if(params !== undefined && params.isFirst  ) {
			<View style={styles.container}>
				<View style={styles.heard}>
					<Text style={styles.textBtn}>请选择您感兴趣的1-5个类别</Text>
				</View>
				{this.renderGridView()}
				<Button 
					containerStyle={styles.sureBtn}
					style={styles.btnText}
					text={'确定'}
				/>
			</View>
		}
		return (
			<View style={styles.container}>
				<View style={styles.heard}>
					<Text style={styles.textBtn}>请选择您感兴趣的1-5个类别</Text>
				</View>
				{this.renderGridView()}
			</View>
		);
	}
}