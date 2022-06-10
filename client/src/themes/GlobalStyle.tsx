import { css, Global } from '@emotion/react';
import { colors, theme } from '@src/themes';
import {
  AppleSDGothicNeoB,
  AppleSDGothicNeoR,
  Helvetica,
  HelveticaBold,
  NanumBarunGothic,
  NanumBarunGothicBold,
} from '@src/asset/fonts';
export default function GlobalStyle(): JSX.Element {
  return (
    <Global
      styles={css`
        /* reset */
        body,
        div,
        span,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        table,
        th,
        td,
        form,
        fieldset,
        legend,
        label,
        textarea,
        input,
        radio,
        select,
        button,
        article,
        aside,
        dialog,
        footer,
        header,
        section,
        footer,
        nav,
        figure,
        main {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Helvetica';
        }

        * {
          -moz-osx-font-smoothing: grayscale;
        }

        article,
        aside,
        dialog,
        footer,
        header,
        section,
        footer,
        nav,
        figure,
        main {
          display: block;
        }

        html,
        body {
          height: 100%;
          -webkit-text-size-adjust: none;
          -ms-text-size-adjust: none;
          scroll-behavior: smooth;
          background-color: ${theme.colors.white};
          overflow: auto;
        }

        #root {
          font-family: 'Helvetica';
          word-break: break-word;
        }

        img,
        form,
        fieldset,
        svg,
        li {
          border: 0;
          vertical-align: top;
          -webkit-user-drag: none;
        }

        ul,
        ol,
        li {
          list-style: none;
        }

        button {
          overflow: visible;
          border: 0;
          background-color: transparent;
          cursor: pointer;
        }

        button:disabled {
          cursor: default;
        }

        button::-moz-focus-inner {
          padding: 0;
          margin: -1px;
        }

        address,
        caption,
        em {
          font-style: normal;
        }

        a,
        a:focus,
        a:active,
        a:hover {
          text-decoration: none;
          color: #000;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        label {
          cursor: pointer;
        }

        @font-face {
          font-family: 'AppleSDGothicNeoR';
          src: url(${AppleSDGothicNeoR});
        }
        @font-face {
          font-family: 'AppleSDGothicNeoB';
          src: url(${AppleSDGothicNeoB});
        }
        @font-face {
          font-family: 'Helvetica';
          src: url(${Helvetica});
        }
        @font-face {
          font-family: 'HelveticaBold';
          src: url(${HelveticaBold});
        }

        @font-face {
          font-family: 'NanumBarunGothic';
          src: url(${NanumBarunGothic});
        }
        @font-face {
          font-family: 'NanumBarunGothicBold';
          src: url(${NanumBarunGothicBold});
        }
        body::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        body::-webkit-scrollbar-thumb {
          height: 20%;
          background: ${colors.azure};
          border-radius: 1px;
        }
        body::-webkit-scrollbar-track {
          background: ${colors.white_four};
        }
      `}
    />
  );
}
