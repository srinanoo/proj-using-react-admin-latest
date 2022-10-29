import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const StudentsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="subject" />
            <EmailField source="email" /> */}
        </Datagrid>
    </List>
);