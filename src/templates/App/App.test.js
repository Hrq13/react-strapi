/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const appWrapper = render(<App />);
  expect(appWrapper).toBeInTheDocument();
});
