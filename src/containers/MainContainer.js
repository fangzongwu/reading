import React, {Component} from "react";
import {View, Text, Button, ListView, RefreshControl} from "react-native";
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
		this.state = {
			isRefreshing: true,
		}
	};
	componentDidMount() {
		NewsCategory.getCategoryDetaile(19).then(() => {
			this.setState({
				isRefreshing: false,
			})
		});
	}
	// _onPress() {
	// 	navigate("web");
	// }
	render() {
		const {navigate} = this.props.navigation;
		const {contentlist} = NewsCategory.showapi_res_detaile_body;
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const dataSource = ds.cloneWithRows(contentlist.slice());
		return (
			<View>
				<ListView 
					dataSource={dataSource}
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							tintColor="#ff0000"
							title="Loading..."
							titleColor="#00ff00"
							colors={['#ff0000', '#00ff00', '#0000ff']}
							progressBackgroundColor="#ffff00"
						/>
					}
					renderRow={(rowData) => (
						<ListViews
							key={rowData.id} 
							text={rowData.title}
							uri={rowData.contentImg}
							containerStyle={{width: 60, height: 60, flex: 1,}}
							style={{backgroundColor: "#fff"}}
							articleText={rowData.userName}
							timeText={rowData.date}
							onPress={() => navigate("web", {newsData: rowData.url})}
						/>
					)}
				/>
			</View>
		);
	}
}

export default MainContainer;