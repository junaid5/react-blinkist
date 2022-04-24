import { render, screen } from '@testing-library/react';
import Footer from './Footer'

test('renders Footer', () => {
    render(<Footer/>);
    const FootersElement = screen.getByTestId('Footers-element')
    expect(FootersElement).toBeInTheDocument(); 
  }); 