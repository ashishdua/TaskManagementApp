import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from '../pages/MainPage';
import * as apiService from '../services/APIService';

jest.mock('../services/APIService');

describe('MainPage', () => {
    test('renders MainPage and fetches work items', async () => {
        const workItems = [
            { id: 1, name: 'Test1', description: 'Description 1', deadline: '2024-09-25' },
            { id: 2, name: 'Tes2', description: 'Description 2', deadline: '2024-09-26' },
        ];

        apiService.getWorkItems.mockResolvedValue(workItems);

        render(<MainPage />);

        // Wait for the work items to be displayed
        const item1 = await screen.findByText((content, element) =>
            element.textContent.includes('Test1')
        );
        const item2 = await screen.findByText((content, element) =>
            element.textContent.includes('Test2')
        );

        expect(item1).toBeInTheDocument();
        expect(item2).toBeInTheDocument();
    });
});
