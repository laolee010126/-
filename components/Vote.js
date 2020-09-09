import React from 'react';
import styled from 'styled-components/native';

const VoteContainer = styled.View``;

const VoteContent = styled.Text`
  color: white;
  opacity: 0.9;
`;

const Vote = ({ vote }) => (
  <VoteContainer>
    <VoteContent>{vote} / 10</VoteContent>
  </VoteContainer>
);

export default Vote;
