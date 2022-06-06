export interface AutoCompleteItem {
  id: string;
  label: string;
  value: string;
}

export interface AutoComplete {
  searchData: AutoCompleteItem[];
  defaultValue: string;
  allowClear: boolean;
  placeholder: string;
  onSelectItem: (value: AutoCompleteItem | undefined) => void;
}

export interface AutoCompleteItems {
  dropDownList: any;
  dropDownItemIndex: number;
  onClickDropDownItem: (clickedItem: any) => void;
  onMouseOver: (index: number) => void;
}
