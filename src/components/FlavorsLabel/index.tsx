import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';


   export interface FlavorsLabelProps {
     id: string;
     name: string;
     available: boolean;
   }
  
    interface Props extends TouchableOpacityProps {
      data: FlavorsLabelProps;
    } 

  export function FlavorsLabel({data, ...rest}: Props) {
    return (
      <TouchableOpacity
       {...rest}
       style={styles.dropdownTouchable}
      >
        <Text style={styles.flavorName}>
          {data.name}
        </Text> 
      </TouchableOpacity>
    );
  };