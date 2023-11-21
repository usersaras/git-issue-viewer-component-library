import React from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import GlobalCSS from "../../Styles/GlobalStyle";
import { SearchWrapper } from "./Searchbar.styled";
import { RoundedVariantsPropType } from "../../Components/SharedStyles/roundedVariants";
import { SizeVariantsPropType } from "../../Components/SharedStyles/sizeVariants";

interface SearchbarProps {
  placeholder: string;
  size: SizeVariantsPropType;
  rounded: RoundedVariantsPropType;
  onSubmit: () => void;
}

const Searchbar = () => {
  GlobalCSS();

  return (
    <SearchWrapper>
      <Input sizeStyle="sm" rounded="sm" />
      <Button size="sm" rounded="sm" color="blue" onClick={() => {}}>
        Search
      </Button>
    </SearchWrapper>
  );
};

export default Searchbar;
