import React, { FC } from 'react';
import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '../ui/button';

type CButtonProps = {
  text: string;
  onPress: () => void;
  className?: string;
  buttonProps?: React.ComponentProps<typeof Button>;
  buttonTextProps?: React.ComponentProps<typeof ButtonText>;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const CButton: FC<CButtonProps> = ({
  text,
  onPress,
  className = '',
  buttonProps = {
    size: 'lg',
    variant: 'solid',
    action: 'primary'
  },
  buttonTextProps = {
    size: 'lg'
  },
  loading = false,
  iconLeft,
  iconRight
}) => {
  const defClassName = 'h-16 w-full rounded-full';
  const mergedClassName = `${defClassName} ${className || ''}`.trim();

  return (
    <Button {...buttonProps} className={mergedClassName} onPress={onPress}>
      {iconLeft}
      <ButtonText {...buttonTextProps}>{text}</ButtonText>
      {iconRight}
      {/* Show spinner if loading is true */}
      {loading && <ButtonSpinner className="text-white" />}
    </Button>
  );
};

export default CButton;
