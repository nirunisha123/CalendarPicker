import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Controls(props) {
  const {
    styles,
    textStyles,
    label,
    component,
    onPressControl,
    disabled,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
      style={styles}
      disabled={disabled}
      hitSlop={{ top: 20, bottom: 20, left: 40, right: 40 }}
    >
     <View style={{opacity: disabled ? 0.4 : 1}}>
        { component ||
          <Icon name={label} color="#8c7bd1" />
        }
      </View>
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  label: PropTypes.string,
  onPressControl: PropTypes.func.isRequired,
};
