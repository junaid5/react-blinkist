import { render, screen } from '@testing-library/react';
import Search from './Search'

test('renders Search Icon', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('search-element')
    expect(SearchElement).toBeInTheDocument();
  });