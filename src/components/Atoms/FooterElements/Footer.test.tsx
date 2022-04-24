import { render, screen } from '@testing-library/react';
import Footer from './FooterElement'

test('renders Footer', () => {
    render(<Footer/>);
    const FooterElement = screen.getByTestId('Footer-element')
    expect(FooterElement).toBeInTheDocument();
  });