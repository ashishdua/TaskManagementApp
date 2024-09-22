import React from "react";
import AddWorkItemForm from "./components/AddWorkItemForm";

function App() {
    const addWorkItem = (workItem) => {
        console.log('Work Item Added -- ', workItem);
    }

    return (
        <div className="App">
            <h1>Work Item Management</h1>
            <AddWorkItemForm addWorkItem={addWorkItem} />
        </div>
    );
}

export default App;