// Internal imports
import { useHomePageContext } from "pages/Home/contexts/HomeContext";
import React, { useEffect, useRef } from "react";
import { Input, LensIcon, TextInputWrapper } from "./styles";

const TextInput = () => {
  // HOOKS
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { onChangeCountry } = useHomePageContext();

  useEffect(() => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const isInputFocused = inputRef.current === document.activeElement;

      if (event.key === "Enter" && isInputFocused) {
        event.preventDefault();
        handleInputSubmit();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListener
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
  }, []);

  // HANDLERS
  const handleInputSubmit = () => {
    onChangeCountry(inputRef.current?.value);
  };

  const handleClickLens = () => {
    handleInputSubmit();
  };

  return (
    <TextInputWrapper
      flexFlow="row wrap"
      justifyContent="space-between"
      alignItems="center"
      columnGap="0.2rem"
    >
      <LensIcon size={24} onClick={handleClickLens} />
      <Input
        ref={inputRef}
        size={40}
        placeholder="Search for a country..."
        onSubmit={handleInputSubmit}
      />
    </TextInputWrapper>
  );
};

export default TextInput;
