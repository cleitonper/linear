import React, { FunctionComponent } from 'react';
import { Props } from './types';

const Link: FunctionComponent<Props> = ({ children, className, to }) => {
  const httpRGX = /^https?:\/\//;
  const isExternal = httpRGX.test(to);
  const props = isExternal
    ? { rel: 'noreferrer noopener nofollow external', target: '_blank' }
    : null;

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

export default Link;
