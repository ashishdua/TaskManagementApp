import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkItemTable from '../components/WorkItemTable';

test('displays "No items found." when there are no work items', () => {
    render(<WorkItemTable workItems={[]} />);
    expect(screen.getByText(/no items found/i)).toBeInTheDocument();
});

test('displays work items in a table', () => {
    const workItems = [
        { id: 1, name: 'Work Item 1', description: 'Description 1', deadline: '2024-09-25' },
        { id: 2, name: 'Work Item 2', description: 'Description 2', deadline: '2024-09-26' },
    ];

    render(<WorkItemTable workItems={workItems} />);

    expect(screen.getByText(/work item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/work item 2/i)).toBeInTheDocument();
});
