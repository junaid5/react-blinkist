import { render, screen } from '@testing-library/react';
import ExploreTab from './ExploreTab'

test('renders ExploreTab', () => {
    render(<ExploreTab/>);
    const ExploreTabElement = screen.getByTestId('ExploreTab-element')
    expect(ExploreTabElement).toBeInTheDocument();
  });