import React, { FC } from 'react';
import {
  ImageStyle,
  ImageURISource,
  LayoutChangeEvent,
  StyleProp,
} from 'react-native';
import { Photo, PhotoAnimated } from './styles';

type Props = {
  id?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  imageRef?: any;
  source: string | ImageURISource;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  animated?: boolean;
};

const Image: FC<Props> = ({
  id,
  width,
  height,
  style = {},
  onLayout,
  source,
  resizeMode,
  animated = false,
  ...rest
}) => {
  if (animated) {
    return (
      <PhotoAnimated
        {...rest}
        testID={id}
        resizeMode={resizeMode}
        onLayout={onLayout}
        style={[style, { width: width, height: height }]}
        source={typeof source === 'string' ? { uri: source } : source}
      />
    );
  }

  return (
    <Photo
      {...rest}
      testID={id}
      resizeMode={resizeMode}
      onLayout={onLayout}
      style={[style, { width: width, height: height }]}
      source={typeof source === 'string' ? { uri: source } : source}
    />
  );
};

export default React.forwardRef((props: Props, ref) => (
  <Image {...props} imageRef={ref} />
));
