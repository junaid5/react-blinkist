import { render, screen } from '@testing-library/react';
import Icons from './Icons'

test('renders Icon', () => {
    render(<Icons height='26px' width='124px'/>);
    const IconElement = screen.getByTestId('Icon-element')
    expect(IconElement).toBeInTheDocument();
  });