import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { TagInfo, TAG_THEME } from './Tag_types';

export function Tag({ theme, label }: TagInfo) {
  const themeStyle = TagTheme[theme];
  return <TagWrapper themeStyle={themeStyle}>{label}</TagWrapper>;
}

const TagTheme = {
  [TAG_THEME.REDDISH]: css`
    border: 1px solid ${colors.reddish_two};
    background-color: ${colors.tomato};
  `,
  [TAG_THEME.PURPLE]: css`
    border: 1px solid ${colors.warm_purple};
    background-color: ${colors.amethyst};
  `,
};

Tag.defaultProps = {
  theme: TAG_THEME.REDDISH,
  label: 'TAG',
};

interface TagStyled {
  themeStyle: SerializedStyles;
}

const TagWrapper = styled.div<TagStyled>`
  width: fit-content;
  padding: 3px 5px;
  border-radius: 9px;
  font-family: 'AppleSDGothicNeoR';
  font-size: 10px;
  letter-spacing: 0.38px;
  color: ${colors.white_two};
  ${(props) => props.themeStyle};
`;
