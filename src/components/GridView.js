import React, { PropTypes } from "react";
import { View, StyleSheet, ListView } from "react-native";

const propTypes = {
	items: PropTypes.array,
	renderItem: PropTypes.func,
	itemsPerRow: PropTypes.number,
	onEndReached: PropTypes.func,
	scrollEnabled: PropTypes.func,
	pageSize: PropTypes.number  
}

const GridView = ({
	items,
	renderItem,
	itemsPerRow,
	onEndReached,
	scrollEnabled,
	pageSize,
}) => {
	const groupItems = (renderItems, renderItemsPerRow) => {
		const itemsGroups = [];
		let group = [];
		renderItems.forEach((item) => {
			if(group.length === renderItemsPerRow) {
				itemsGroups.push(group);
				group = [item];
			}else {
				group.push(item);
			}
		})
	};

	const renderGroup = (group) => {
		const itemViews = group.map((item) => {
			const i = renderItem(item);
			return i;
		});
		return (
			<View style={styles.group}>
				{itemViews}
			</View>
		);
	};

	const groups = groupItems(items, itemsPerRow);

	const ds = new ListView.DataSource({
		rowHasChanged: (r1, r2) => r1 !== r2
	});

	return (
		<ListView 
			initialListSize={1}
			dataSource={ds.cloneWithRows(groups)}
			renderRow={renderGroup}
			onEndReached={onEndReached}
			scrollEnabled={scrollEnabled}
			pageSize={pageSize || 1}
			enableEmptySections
		/>
	);
}

const styles = StyleSheet.create({
	group: {
		flexDirection: "row",
		alignItems: "center",
	}
});

GridView.propTypes = propTypes;

GridView.defaultProps = {
	items: [],
	renderItem: null,
	itemsPerRow: 1,
	onEndReached: undefined
};

export default GridView;