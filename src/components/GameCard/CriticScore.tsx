import { Badge } from '@chakra-ui/react';
import React from 'react';
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const colorScheme =
    score > 90
      ? 'green'
      : score > 60
      ? 'yellow'
      : 'red';
  return (
    <Badge colorScheme={colorScheme}>
      {score}
    </Badge>
  );
};

export default CriticScore;
