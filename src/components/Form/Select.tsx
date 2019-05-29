import styled from 'styled-components';
import React, { useRef, useEffect, FunctionComponent } from 'react';
import ReactSelect, {  } from 'react-select';
import { useField } from '@rocketseat/unform';

interface Option {
  id: string;
  title: string;
  disabled?: boolean;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
  multiple: boolean;
  className?: string;
}

const BaseSelect: FunctionComponent<Props> = ({
  name,
  label,
  options,
  multiple,
  ...rest
}) => {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
    });
  }, [registerField, fieldName]);

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id === defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.id));
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <ReactSelect
        ref={ref}
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        isOptionDisabled={option => !!option.disabled}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}

const Select = styled(BaseSelect)`
  margin-bottom: 24px;

  .css-1pahdxg-control,
  .css-yk16xz-control {
    border-radius: 0;
    min-height: 48px;
  }

  .css-26l3qy-menu {
    margin-top: 1px;
  }
`;

export default Select;