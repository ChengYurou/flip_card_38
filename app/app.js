import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as _ from 'lodash';

import FlipCard from './components/flipCard/flipCard';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flipCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9c9',
    height: 200,
    margin: 10,
  },
  placeholder: {
    flex: 3,
  },
  frontCard: {
    backgroundColor: '#9c9',
  },
  backCard: {
    backgroundColor: '#c9c',
  },
});

class MemoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.flipCard = null;
  }

  static get arrayLength() {
    return Array.from({ length: 5 });
  }

  renderFrontCard = () => (
    <TouchableOpacity style={styles.frontCard} onPress={() => this.flipCard.toggleCard()}>
      {_.map(MemoryCard.arrayLength, (row, index) => (
        <Text key={index}>front card 卡片正面</Text>
      ))}
    </TouchableOpacity>
  );

  renderBackCard = () => (
    <TouchableOpacity style={styles.backCard} onPress={() => this.flipCard.toggleCard()}>
      {_.map(MemoryCard.arrayLength, (row, index) => (
        <Text key={index}>back card卡片反面</Text>
      ))}
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlipCard
          ref={(component) => {
            this.flipCard = component;
          }}
          style={styles.flipCard}
          renderFrontCard={this.renderFrontCard}
          renderBackCard={this.renderBackCard}
        />
        <View style={styles.placeholder} />
      </View>
    );
  }
}

export default MemoryCard;
