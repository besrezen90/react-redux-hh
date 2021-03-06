import React from "react";
import style from "./SearchBlock.less";

import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { IFilter } from "../../types";

interface IProps {
  filter: IFilter;
  onChange: (filter: IFilter) => void;
  onFetchData: () => void;
}

const SearchBlock: React.FC<IProps> = ({ filter, onChange, onFetchData }) => {
  const vacancyName = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Input
        ref={vacancyName}
        value={filter.text}
        placeholder="Введите название вакансии"
        onChange={() => onChange({ text: vacancyName.current.value })}
      />
      <Button text="Найти" onClick={onFetchData} />
    </React.Fragment>
  );
};

export default SearchBlock;
