import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface TButton {
  title: string;
  iconName?: string;
  iconColor?: string;
  variant?: 'Filled' | 'Outlined' | 'icon';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({
  title,
  iconName,
  iconColor,
  variant,
  textStyle,
  buttonStyle,
  ...props
}: TButton) => {
  const buttonStyles = [
    styles.container,
    variant === 'Filled' && styles.filledButton,
    variant === 'Outlined' && styles.outlinedButton,
    variant === 'icon' && [styles.iconButton, {paddingHorizontal: 0}],
    buttonStyle,
  ];

  const textStyles = [
    styles.titleText,
    variant === 'Filled' && styles.filledText,
    variant === 'Outlined' && styles.outlinedText,
    textStyle,
  ];

  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      <Text style={textStyles}>{title}</Text>
      {iconName && <Icon name={iconName} size={16} color={iconColor} />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 46,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 48,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 16,
  },
  filledButton: {
    backgroundColor: 'black',
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
  },
  iconButton: {},
  filledText: {},
  outlinedText: {
    color: 'black',
  },
});
