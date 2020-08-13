import styled from 'styled-components/native';
import Constants from 'expo-constants';

export default styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ background }) => (background ? background : '#fff')};
  margin-top: ${`${Constants.statusBarHeight}px`};
`;
