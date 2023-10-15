import React from 'react';
import { render } from '@testing-library/react';

import useFetch from './useFetch';
test('renders a message', () => {
const { getByText } = render(<MyComponent message="Hello, World!" />);
const messageElement = getByText(/Hello, World!/i);
expect(messageElement).toBeInTheDocument();
});