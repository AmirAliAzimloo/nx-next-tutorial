import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../src/components/form';

// npx jest from.test.tsx

describe('Testing Form component', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('renders a heading', () => {
    const text = screen.getByText(/Form/i);
    expect(text).toBeInTheDocument();
  });

  it('renders a heading inside h1', () => {
    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toBeInTheDocument();
  });

  it('test the description', () => {
    const text = screen.getByTestId('desc');
    expect(text.textContent).toMatch(/description/);
  });

  it('render input textbox', () => {
    const textInput = screen.getByPlaceholderText(/Enter a note/i);
    expect(textInput).toBeInTheDocument();
  });

  it('Add note button renders', () => {
    const addNoteButton = screen.getByRole('button');
    expect(addNoteButton).toBeInTheDocument();
  });
  it('Check Add note button disabled', () => {
    const addNoteButton = screen.getByRole('button');
    expect(addNoteButton).toBeDisabled();
  }); 
  
  
  it('Fill the input note textbox to make button enabled', () => {
    const textInput = screen.getByPlaceholderText(/Enter a note/i);
    fireEvent.change(textInput,{ target: { value: 'Sample note' } });

    const addNoteButton = screen.getByRole('button');
    expect(addNoteButton).not.toBeDisabled();
  });
});
