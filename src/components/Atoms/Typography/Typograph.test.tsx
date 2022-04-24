import { render, screen } from '@testing-library/react';
import Typograph from './Typograph'

test('renders Typograph', () => {
    render(<Typograph/>);
    const TypographElement = screen.getByTestId('Typograph-element')
    expect(TypographElement).toBeInTheDocument();
  });