import { render, screen } from '@testing-library/react';
import Anchor from './Anchor'

test('renders Avatar', () => {
    render(<Anchor />);
    const avatarElement = screen.getByTestId('avatar-element')
    expect(avatarElement).toBeInTheDocument();
  });