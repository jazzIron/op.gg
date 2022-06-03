import styled from '@emotion/styled';
import { Icons } from './Icon_types';

export function Icon({ icon, width, height }: Icons) {
  return <IconStyled src={icon} width={width} height={height} />;
}

interface IconStyleProps {
  width: string;
}

const IconStyled = styled.img<IconStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

Icon.defaultProps = {
  width: '28px',
  height: '28px',
};
