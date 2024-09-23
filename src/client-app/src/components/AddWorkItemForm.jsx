import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import '../styles/AddWorkItemForm.css';

const AddWorkItemForm = ({ addWorkItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description && deadline) {
            addWorkItem({ name, description, deadline });
            setName('');
            setDescription('');
            setDeadline('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
            <Typography variant="h6">Add Work Item</Typography>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <TextField
                label="Deadline"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button variant="contained" color="primary" type="submit">
                Add Work Item
            </Button>
        </Box>
    );
};

AddWorkItemForm.propTypes = {
    addWorkItem: PropTypes.func.isRequired,
};

export default AddWorkItemForm;
