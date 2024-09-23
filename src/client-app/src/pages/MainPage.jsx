import React, { useEffect, useState } from 'react';
import AddWorkItemForm from '../components/AddWorkItemForm';
import WorkItemTable from '../components/WorkItemTable';
import { getWorkItems, addWorkItem } from '../services/APIService';
import { Container } from '@mui/material';
import '../styles/MainPage.css';

const MainPage = () => {
    const [workItems, setWorkItems] = useState([]);

    useEffect(() => {
        const fetchWorkItems = async () => {
            const items = await getWorkItems();
            setWorkItems(items.data);
        };
        fetchWorkItems();
    }, []);

    const handleAddWorkItem = async (newWorkItem) => {
        const addedItem = await addWorkItem(newWorkItem);
        setWorkItems([...workItems, addedItem]);
    };

    return (
        <Container className='main-page'>
            <AddWorkItemForm addWorkItem={handleAddWorkItem} />
            <h1>Work Items</h1>
            <WorkItemTable workItems={workItems} />
        </Container>
    );
};

export default MainPage;
