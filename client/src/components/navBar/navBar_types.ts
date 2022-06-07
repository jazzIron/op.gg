interface NavBarOption {
  id: string;
  text: string;
}

export interface NavBarOptions {
  activeId: string;
  options: NavBarOption[];
  onChange: (id: string) => void;
}
