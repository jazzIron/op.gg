export interface TabItem {
  id: number;
  label: string;
}

export interface TabContent {
  content: string | JSX.Element | JSX.Element[];
}
