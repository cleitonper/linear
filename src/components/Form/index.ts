import styled from 'styled-components';
import {
  Form as UnForm,
  Input,
  Select,
} from '@rocketseat/unform';

const Form = styled(UnForm)`
  label {
    display: block;
    font-size: 16px;
    margin-bottom: 6px;
  }

  > span {
    display: block;
    font-size: 14px;
    line-height: 1.45em;
    color: var(--color-danger);
    transform: translateY(-16px);
  }

  select,
  input[type="text"] {
    height: 48px;
    padding: 8px;
    margin-bottom: 24px;
    background-color: #ffffff;
    border-color: rgba(0, 0, 0, 0.25);
    border-style: solid;
    border-width: 1px;
    font-size: 16px;
    appearance: none;
    box-shadow: none;
    color: rgba(0, 0, 0, 0.65);

    :focus,
    :active {
      outline: 0px;
      box-shadow: 0px;
      border-color: #1890ff;
      color: rgba(0, 0, 0, 0.65);
    }
  }

  select {
    background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="enable-background:new 0 0 255 255;" viewBox="0 0 255 255" height="255px" width="255px" x="0px" y="0px" ><g><g id="arrow-drop-down" fill="rgba(0, 0, 0, 0.65)"><polygon points="0, 63.75 127.5, 191.25 255, 63.75"/></g></g></svg>');
    background-position: calc(100% - 12px) center;
    background-repeat: no-repeat;
    background-size: 10px;

    :-moz-focusring,
    ::-moz-focus-inner {
        color: transparent;
        text-shadow: 0 0 0 #000;
        border: 1px solid #1890ff;
    }
  }
`;

export { Form, Input, Select };
