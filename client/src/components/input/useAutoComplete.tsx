import { useState, useEffect, MouseEvent, KeyboardEvent } from 'react';
import { AutoCompleteItem } from './AutoComplete_types';

export function useAutoComplete(searchData: AutoCompleteItem[], defaultValue: string) {
  //selected option item
  const [selectedItem, setSelectedItem] = useState(() => {
    return searchData.find((data) => data.value === defaultValue);
  });

  //input text value
  const [textValue, setTextValue] = useState('');

  const [isHaveInputValue, setIsHaveInputValue] = useState(false); //dropdown 표시 유무
  const [dropDownList, setDropDownList] = useState<AutoCompleteItem[]>(searchData);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1); //dropdown focus index

  //input onchange handler
  const changeInputValue = (text: string) => {
    let dropdownList = searchData;
    let findItem: AutoCompleteItem | undefined = undefined;

    if (text !== '') {
      dropdownList = searchData.filter((textItem) => textItem.label.includes(text));

      findItem = searchData.find((item) => item.label === text);
      if (findItem) {
        const equalItemIndex = dropdownList.indexOf(findItem);
        dropdownList = [findItem, ...dropdownList.filter((data, idx) => idx !== equalItemIndex)];
      }
    }

    setTextValue(text); //input text
    setDropDownList(dropdownList); //dropdown list options
    setIsHaveInputValue(true); //text가 있으면 dropdown 보이기
    setSelectedItem(findItem); //text와 일치하는 option item이 있으면 선택
    setDropDownItemIndex(dropdownList.length > 0 ? 0 : -1); //dropdown 리스트가 있으면 맨 위(0)에 포커스
  };

  //dropdown mouse click event
  const clickDropDownItem = (clickedItem: AutoCompleteItem) => {
    setSelectedItem(clickedItem);
    setIsHaveInputValue(false);
  };

  //dropdown keyboard event
  const handleDropDownKey = (event: KeyboardEvent<HTMLInputElement>) => {
    // console.log(event.key, dropDownItemIndex, dropDownList);
    if (isHaveInputValue) {
      if (event.key === 'ArrowDown' && dropDownList.length - 1 > dropDownItemIndex) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }
      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  //dropdown mouse over event
  const handleMouseOver = (dropDownIndex: number) => {
    setDropDownItemIndex(dropDownIndex);
  };

  //input value clear event
  const handleClickAllowClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedItem(undefined);
  };
  const handleMouseDown = (e: MouseEvent<HTMLInputElement>) => e.preventDefault();

  //input click event
  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (textValue === '') {
      setDropDownList(searchData);
      setIsHaveInputValue(true);
    } else {
      changeInputValue(textValue);
    }
  };

  //초기값 설정
  useEffect(() => {
    if (defaultValue !== selectedItem?.value) {
      const find = searchData.find((data) => data.value === defaultValue);
      setSelectedItem(find);
    }
  }, [defaultValue]);

  return {
    textValue,
    selectedItem,
    isHaveInputValue,
    dropDownList,
    dropDownItemIndex,
    clickDropDownItem,
    changeInputValue,
    setIsHaveInputValue,
    setTextValue,
    handleDropDownKey,
    handleMouseOver,
    handleMouseDown,
    handleClickAllowClear,
    handleClick,
  };
}
