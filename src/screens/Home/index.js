import React from 'react';
import styled from 'styled-components/native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { ListingMockData as DATA } from '../../utils/__mocks__/ListingMockData';
import { constants, colors } from '../../theme';

const { DEFAULT_FONT_SIZE, SMALL_FONT_SIZE } = constants;

const TouchCard = styled.TouchableOpacity`
  position: relative;
  width: 327px;
  height: 200px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const CardImage = styled.Image`
  width: 327px;
  height: 150px;
  margin-bottom: 5px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const CardDetails = styled.View`
  padding: 0 10px;
`;

const RatingContainer = styled.View`
  position: absolute;
  background-color: ${colors.brand.secondary};
  padding: 2px 16px;
  top: -9px;
  right: 24px;
  border-top-right-radius: 2.5px;
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
`;

const RatingText = styled.Text`
  text-align: center;
  color: ${colors.text.white};
`;

const CardTitle = styled.Text`
  font-size: ${DEFAULT_FONT_SIZE};
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${colors.text.black};
`;

const LightTitle = styled.Text`
  font-size: ${SMALL_FONT_SIZE};
  font-weight: 200;
  letter-spacing: 0.5px;
  color: ${colors.text.grey};
`;

const LocationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LocationDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;
const DistanceDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HomeHorizontalList = styled(FlatList)`
  flex: 1;
  width: 100%;
  padding: 20px 10px;
  margin-top: ${`${Constants.statusBarHeight}px`};
  background-color: ${colors.background.white};
`;

const renderItem = () => (
  <TouchCard activeOpacity={0.5} onPress={() => console.log('clicked')}>
    <CardImage
      source={{
        uri:
          'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
      }}
      resizeMode='cover'
    />
    <RatingContainer>
      <RatingText>4.8 ★</RatingText>
    </RatingContainer>
    <CardDetails>
      <CardTitle>General Stores</CardTitle>
      <LocationContainer>
        <LocationDetails>
          <EvilIcons name='location' size={14} color={colors.text.grey} />
          <LightTitle>Kochi</LightTitle>
        </LocationDetails>
        <DistanceDetails>
          <Ionicons
            style={{ marginRight: 3 }}
            name='ios-compass'
            size={14}
            color={colors.text.grey}
          />
          <LightTitle>2.1 kms</LightTitle>
        </DistanceDetails>
      </LocationContainer>
    </CardDetails>
  </TouchCard>
);

const HomeScreen = () => {
  return (
    <HomeHorizontalList
      contentContainerStyle={styles.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
});

export default HomeScreen;
