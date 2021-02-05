import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const{container} = render(<App />);
  const tree = container.firstChild;
  
  expect(tree).toMatchSnapshot();
});