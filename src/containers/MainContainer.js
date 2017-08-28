import React, {Component} from "react";
import {View, Text, Button, ListView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {observer} from "mobx-react";

import NewsCategory from "./../models/newsCategory";
import ListViews from "./../components/ListView";


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
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const dataSource = ds.cloneWithRows(contentlist.slice());
		return (
			<View>
				<ListView 
					dataSource={dataSource}
					renderRow={(rowData) => (
						<ListViews
							key={rowData.id} 
							text={rowData.title}
							uri={rowData.contentImg}
							containerStyle={{width: 60, height: 60, flex: 1,}}
							style={{backgroundColor: "#fff"}}
						/>
					)}
				/>
			</View>
		);
	}
}

export default MainContainer;