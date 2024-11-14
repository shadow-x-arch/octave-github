// src/components/TaskManager.test.tsx

 
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // This import is now handled by setupTests.ts
import TaskManager from './TaskManager';

test('renders Task Manager heading', () => {
  render(<TaskManager />);
  const headingElement = screen.getByText(/Task Manager/i);
  expect(headingElement).toBeInTheDocument();
});
