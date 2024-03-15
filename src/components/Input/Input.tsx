import React, { useRef } from "react";
import { InputContainer, StyledInput } from "./InputStyle";
import { Text } from "../Text/Text";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  fullWidth?: boolean;
}

export const Input = ({
  value, onChange, label, placeholder, autoFocus=false, fullWidth=false,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = () => {
    inputRef.current?.focus();
  }

  return (
    <InputContainer data-full-width={fullWidth}>
      {label && (
        <Text variant="body1"
          onClick={handleLabelClick}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </Text>
      )}
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        ref={inputRef}
      />
    </InputContainer>
  )
}
