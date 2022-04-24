import { render, screen } from '@testing-library/react';
import Dialog from './Dialog'

test('renders BasicModal', () => {
    render(<Dialog/>);
    const DialogElement = screen.getByTestId('BasicModal-element')
    expect(DialogElement).toBeInTheDocument(); 
  });