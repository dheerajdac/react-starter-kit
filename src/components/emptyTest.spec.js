import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';
describe('Link', () => {
  it('should render correctly', () => {
     shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
  });
});
