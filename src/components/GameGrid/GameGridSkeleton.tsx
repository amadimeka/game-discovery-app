import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const GameGridSkeleton = () => {
  return (
    <Card w="300px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText noOfLines={4} />
      </CardBody>
    </Card>
  );
};

export default GameGridSkeleton;
