interface NavBarOption {
  id: string;
  text: string;
}

export interface NavBarOptions {
  activeId: string;
  options: NavBarOption[];
  children?: string | JSX.Element | JSX.Element[];
  onChange: (id: string) => void;
}
