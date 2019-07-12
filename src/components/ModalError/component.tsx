import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

export const BaseModalError: FunctionComponent<Props> = ({
  className,
  title,
  message,
  icon,
  error,
  info,
}) => (
  <div className={className}>
    <img className="icon" src={require(`assets/img/errors/${icon}.svg`)} alt="Icone"/>
    <span className="title">{title}</span>
    <span className="message">{message}</span>
    {(error || info) &&
      <details>
        {error && <div>{error.toString()}</div>}
        {info && <div>{info.componentStack}</div>}
      </details>
    }
  </div>
);

const ModalError = styled(BaseModalError)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  max-width: 320px;

  .icon {
    height: 200px;
  }

  .title {
    color: #302b3a;
    font-size: 24px;
    font-weight: bold;
    margin-top: 18px
  }

  .message {
    color: #302b3a;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.45em;
    text-align: center;
    margin-top: 12px
  }

  details {
    width: 100%;
    padding: 8px;
    margin-top: 32px;
    border-radius: 6px;
    background: #2e3440;
    color: #ffffff;

    div {
      padding: 16px 18px 8px;
    }
  }
`;

export default ModalError;
