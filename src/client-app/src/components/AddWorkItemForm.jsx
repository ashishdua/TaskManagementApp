import React, { useState } from 'react';
import { addWorkItem } from '../services/APIService';

const AddWorkItemForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name || !description || !deadline) {
            setError('All fields are required.');
            return;
        }

        try {
            const newWorkItem = { name, description, deadline };

            await addWorkItem(newWorkItem);
            console.log("WorkItem Added Successfully --> ", name, description, deadline);

            setName('');
            setDescription('');
            setDeadline('');
        } catch (err) {
            setError('Failed to add work item.');
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Deadline:
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Work Item</button>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        </form>
    );
};

export default AddWorkItemForm;
