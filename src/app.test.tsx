// src/App.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('renders home components by default', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Welcome onboard')).toBeInTheDocument();
  });

  test('toggles theme on button click', () => {
    const toggleButton = screen.getByText('Toggle Theme');
    fireEvent.click(toggleButton);
    // Assert theme change based on your theme structure
  });

  test('navigates to CRUD page and adds a new todo', async () => {
    const crudLink = screen.getByText('CRUD');
    fireEvent.click(crudLink);

    await waitFor(() => expect(screen.getByText('CRUD Page')).toBeInTheDocument());

    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    await waitFor(() => expect(screen.getByText('Test Todo')).toBeInTheDocument());
  });

  test('edits an existing todo in CRUD page', async () => {
    const crudLink = screen.getByText('CRUD');
    fireEvent.click(crudLink);

    await waitFor(() => expect(screen.getByText('CRUD Page')).toBeInTheDocument());

    const editButton = screen.getAllByText('Edit')[0];
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue(/[\w\s]+/); // Finds the input with the current value
    fireEvent.change(editInput, { target: { value: 'Updated Todo' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    await waitFor(() => expect(screen.getByText('Updated Todo')).toBeInTheDocument());
  });

  test('deletes a todo in CRUD page', async () => {
    const crudLink = screen.getByText('CRUD');
    fireEvent.click(crudLink);

    await waitFor(() => expect(screen.getByText('CRUD Page')).toBeInTheDocument());

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    await waitFor(() => expect(deleteButtons[0]).not.toBeInTheDocument());
  });

  test('sends a new message in ChatBoard', () => {
    const messageInput = screen.getByPlaceholderText('Type a message...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(messageInput, { target: { value: 'Hello!' } });
    fireEvent.click(sendButton);

    expect(screen.getByText('Hello!')).toBeInTheDocument();
    expect(screen.getByText('Let me get that for you!')).toBeInTheDocument();
  });

  test('switches languages in Languages component', () => {
    const frenchButton = screen.getByText('French');
    fireEvent.click(frenchButton);

    expect(screen.getByText('Bienvenue à bord')).toBeInTheDocument();

    const koreanButton = screen.getByText('Korean');
    fireEvent.click(koreanButton);

    expect(screen.getByText('환영합니다')).toBeInTheDocument();
  });
});
