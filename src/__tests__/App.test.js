import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../components/App';

describe('Tests for App component', () => {
    it('should render the app', () => {
        const { getByRole } = render(<App />);
        expect(
            getByRole('heading', {
                name: /react starter project powered by parcel/i,
            }),
        ).toBeInTheDocument();
    });
});
