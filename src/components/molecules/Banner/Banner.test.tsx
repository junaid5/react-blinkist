import { render, screen } from '@testing-library/react';
import Banner from './Banner'

test('renders Banner', () => {
    render(<Banner/>);
    const BannerElement = screen.getByTestId('Banner-element')
    expect(BannerElement).toBeInTheDocument();
  });