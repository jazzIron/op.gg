import { css, SerializedStyles } from '@emotion/react';
import colors from '@src/themes/emotion/colors';

const fonts: { [key: string]: SerializedStyles } = {
  textStyle01: css`
    font-family: 'Helvetica';
    font-size: 12px;
    letter-spacing: 0px;
    color: ${colors.grey_temp};
  `,
  textStyle02: css`
    font-family: 'HelveticaBold';
    font-size: 12px;
    letter-spacing: 0px;
    color: ${colors.grey_temp};
    font-weight: bold;
  `,
  textStyle03: css`
    font-family: 'AppleSDGothicNeoB';
    font-size: 20px;
    letter-spacing: -0.77px;
    color: ${colors.charcoal};
    font-weight: bold;
  `,
  textStyle04: css`
    font-family: 'AppleSDGothicNeoR';
    font-size: 11px;
    letter-spacing: -0.42px;
    color: ${colors.slate_grey};
  `,
  textStyle05: css`
    font-family: 'HelveticaBold';
    font-size: 11px;
    letter-spacing: -0.42px;
    color: ${colors.grey_temp};
    font-weight: bold;
  `,
  textStyle06: css`
    font-family: 'Helvetica';
    font-size: 11px;
    letter-spacing: -0.42px;
    color: ${colors.slate_grey};
  `,
  textStyle08: css`
    font-family: 'Helvetica';
    font-size: 14px;
    letter-spacing: 0px;
    color: ${colors.dull_yellow};
  `,
  textStyle09: css`
    font-family: 'AppleSDGothicNeoR';
    font-size: 11px;
    letter-spacing: 0px;
    color: ${colors.grey_temp};
  `,
  textStyle10: css`
    font-family: 'HelveticaBold';
    font-size: 15px;
    letter-spacing: 0px;
    color: ${colors.bluish};
    font-weight: bold;
  `,

  textStyle11: css`
    font-family: 'HelveticaBold';
    font-size: 13px;
    letter-spacing: 0px;
    color: ${colors.grey_temp};
    font-weight: bold;
  `,
};

export type IFont = typeof fonts;
export default fonts;
