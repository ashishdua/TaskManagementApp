import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddWorkItemForm from '../components/AddWorkItemForm';

test('should submit work item with valid details', async () => {
    const addWorkItemMock = jest.fn();
    render(<AddWorkItemForm addWorkItem={addWorkItemMock} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Work Item' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText(/deadline/i), { target: { value: '2024-09-25' } });

    fireEvent.click(screen.getByRole('button', { name: /add work item/i }));

    expect(addWorkItemMock).toHaveBeenCalledWith({
        name: 'Test Work Item',
        description: 'Test Description',
        deadline: '2024-09-25',
    });
});
