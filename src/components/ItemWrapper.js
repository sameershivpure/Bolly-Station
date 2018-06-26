import React, { Component } from 'react';
import AlbumItem from './AlbumItem';
import PlayListItem from './PlayListItem';

const ItemWrapper = (ItemComponent) => {

	return class extends Component {

		onClickHandle = id => {
			this.props.onClick(id);
		}

		render() {
			return (
				<ItemComponent data={this.props.data} onClickHandle={this.onClickHandle} />
			);
		}
	}

}

export const AlbumObject = ItemWrapper(AlbumItem);

export const PlayListObject = ItemWrapper(PlayListItem);

export default ItemWrapper;