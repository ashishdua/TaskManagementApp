import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddWorkItemForm from '../components/AddWorkItemForm';
import * as apiService from '../services/APIService';

jest.mock('../services/apiservice'); // Mock the API service

describe('AddWorkItemForm', () => {
    beforeEach(() => {
        apiService.addWorkItem.mockClear(); // Clear previous mock calls
    });

    test('should render the form', () => {
        render(<AddWorkItemForm />);

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/deadline/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add work item/i })).toBeInTheDocument();
    });

    test('should submit work item with valid details', async () => {
        apiService.addWorkItem.mockResolvedValueOnce({}); // Mock successful API response

        render(<AddWorkItemForm />);

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Work Item' } });
        fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Test Description' } });
        fireEvent.change(screen.getByLabelText(/deadline/i), { target: { value: '2024-09-25' } });

        fireEvent.click(screen.getByRole('button', { name: /add work item/i }));

        expect(apiService.addWorkItem).toHaveBeenCalledWith({
            name: 'Test Work Item',
            description: 'Test Description',
            deadline: '2024-09-25',
        });
    });

    test('should not submit the form if fields are empty', () => {
        render(<AddWorkItemForm />);

        fireEvent.click(screen.getByRole('button', { name: /add work item/i }));

        expect(apiService.addWorkItem).not.toHaveBeenCalled();
    });

    test('should display error message on API failure', async () => {
        apiService.addWorkItem.mockRejectedValueOnce(new Error('API error'));

        render(<AddWorkItemForm />);

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Work Item' } });
        fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Test Description' } });
        fireEvent.change(screen.getByLabelText(/deadline/i), { target: { value: '2024-09-25' } });

        fireEvent.click(screen.getByRole('button', { name: /add work item/i }));

        expect(await screen.findByText(/failed to add work item/i)).toBeInTheDocument();
    });
});
