import React from 'react';
import {View} from 'react-native';

interface IListSeprator {
  size?: number;
  backgroundColor?: string;
}

export const ListSeprator = ({
  size = 1,
  backgroundColor = 'grey',
}: IListSeprator) => {
  return <View style={{height: size, backgroundColor}} />;
};
