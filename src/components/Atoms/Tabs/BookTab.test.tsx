import { render, screen } from '@testing-library/react';
import BookTab from './BookTab'

test('renders BookTab', () => {
    render(<BookTab/>);
    const BookTabElement = screen.getByTestId('BookTab-element')
    expect(BookTabElement).toBeInTheDocument();
  });