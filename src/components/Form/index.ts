import styled from 'styled-components';
import { Form as UnForm, Input as UnInput } from '@rocketseat/unform';
import Select from './Select';

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
`;

const Input = styled(UnInput)`
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
    border-color: #1890ff;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export { Form, Input, Select };
