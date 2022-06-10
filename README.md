# **op.gg**

> _op.gg subject project_

## Subject Check List

| 완료여부 | 내용                                                                         |
| -------- | ---------------------------------------------------------------------------- |
| ☑️       | 검색 시 검색한 소환사 정보가 노출되어야 하며, 검색창 최근 검색 리스트가 노출 |
| ☑️       | 매치 리스트 타입에 따라 필터링                                               |
| ☑️       | 아이템에 mouse hover시 툴팁                                                  |
| ☑️       | 과제에서 매치 더 보기 기능은 제외                                            |
| ☑️       | 탭 선택에 따라 프리시즌과 7일간 랭크 승률 (정렬: 플레이 게임수)              |

#### 추가

- default Page
- Error Page
- ErrorBoundary Setting
- Skeleton Loading
- 팀원 디테일 새창 이동 (기존 op.gg 사이트)
- 챔피언 디테일 새창 이동 (기존 op.gg 사이트)

## Development Environment🛠

- [React] 17.x
- [Typescript] 4.6.3
- [webpack] 5
- [Babel]
- [eslint]
- [prettier]
- [emotion]
- [moment]
- [axios]
- [recoil]
- [react-toastify]
- [react-minimal-pie-chart]

## Project Structure 🛠

| folder     | description                                           |
| ---------- | ----------------------------------------------------- |
| api        | api 관련 모음                                         |
| assets     | 리소스 아이템 모음                                    |
| components | 페이지에 종속되지 않는 하위 컴포넌트                  |
| features   | 페이지 조각들의 모음<br/> 각 도메인(페이지) 단위 모음 |
| json       | json 파일 모음                                        |
| layout     | 레이아웃 컴포넌트                                     |
| routes     | 라우터 설정 페이지 모음                               |
| store      | recoil 모음 <br/>상태 초기값, 공용 값 정리            |
| themes     | 테마 설정 모음                                        |
| utils      | 필요한 공통 유틸 모음                                 |
| @types     | 타입스크립트 타입 설정파일 모음                       |

| setting file      | description                                |
| ----------------- | ------------------------------------------ |
| .evn              | 환경변수 절정파일                          |
| eslintrc.js       | lint의 설정                                |
| prettierrc.js     | prettierrc 설정파일                        |
| babel.config      | babel 설정 파일                            |
| tsconfig.json     | typescript 설정 파일                       |
| webpack.config.js | webpack 설정파일                           |
| layout            | 레이아웃 컴포넌트                          |
| routes            | 라우터 설정 페이지 모음                    |
| store             | recoil 모음 <br/>상태 초기값, 공용 값 정리 |
| themes            | 테마 설정 모음                             |
| utils             | 필요한 공통 유틸                           |

## Project Setting / Start

####

1. package install

   ```bash
   cd client
   yarn install
   ```

2. project start

   ```bash
   cd client
   # react port 3000
   # production mode
   yarn start
   # developer mode
   yarn dev
   ```

## Libraries📦

#### 1. recoil

- **React 전용이며 React에 최적화 되어 있기 때문에 적용**
- Recoil는 React 프로젝트를 위한 상태 관리 라이브러리 Facebook에서 출시
- Flux 패턴을 기반으로 설계 되면서 안정적인 전역 상태 관리가 가능 [Flux 패턴 관련링크 ](https://medium.com/hcleedev/web-react-flux-%ED%8C%A8%ED%84%B4-88d6caa13b5b)![](https://miro.medium.com/max/1400/0*ZTe7dIoLlUFYFbML.png)

#### 2. emotion/Styled

- CSS-in-JS의 종류의 라이브러리
- 필요한 스타일은 해당 컴포넌트에 styled-component를 사용하여 생성
- 재사용 용의
- props, 조건 등에 따라 스타일 지정 가능의 편리함 및 확장 용의성
- className 자동 부여되기에 스타일 중복 방지

## 느낀점

op.gg 사이트는 평소 자주 사용했던 서비스였기 때문에 즐겁게 과제를 진행할 수 있었습니다.  
시작하기 전 '어떻게 하면 깔끔한 구조로 개발할 수 있을까?'라는 고민을 많이 시작하고 진행했습니다.

최근 webpack5에 관한 공부를 진행하고 있기에 CRA 프로젝트가 아닌 간단한 webpack5 와 babel를 통해 프로젝트 구성을 진행하였습니다.  
재플린의 스타일 가이드를 기반으로 공통 font, color, image와 UI 구성과 아토믹 기반의 컴포넌트를 개발 후 Feature 단위로 개발을 진행했습니다.

리 렌더링을 줄이기 위해 최적화에 시간을 투자했으며, 메인 화면이 없었기 때문에 검색어가 없는 경우 빈 페이지를 어떤 방식으로 구성할 지에 대해 고민을 했습니다.  
컴포넌트 개발 시 최대한 lib를 사용하지 않고 개발하는 방식으로 과제의 방향을 정했습니다.

성능에 대한 많은 고민을 하며 과제를 진행 했기에 많은 공부가 되는 경험이 되었으며, 기반으로 추후 개발 시 많은 도움이 될 것 같습니다.

## License

MIT
**Free Software**

[//]: #
[webpack]: https://webpack.kr/migrate/5/
[react]: https://ko.reactjs.org/
[typescript]: https://www.typescriptlang.org/
[emotion]: https://emotion.sh/docs/introduction
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[babel]: https://babeljs.io/
[moment]: https://momentjs.com/
[axios]: https://axios-http.com/kr/docs/intro
[recoil]: https://recoiljs.org/ko/
[react-toastify]: https://fkhadra.github.io/react-toastify/introduction
[react-minimal-pie-chart]: https://www.npmjs.com/package/react-minimal-pie-chart
