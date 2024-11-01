import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import Home from '../src/components/home';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

test('Test navigation to another route', () => {
  const mockPush = jest.fn();

  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
  });

  render(<Home />);

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(mockPush).toHaveBeenCalledWith('todo');
});

test('Should navigate to "/todo" when button is clicked', () => {
  const mockPush = jest.fn();
  const useRouterMock = jest
    .spyOn(require('next/navigation'), 'useRouter')
    .mockReturnValue({ push: mockPush });

  const { getByText } = render(<Home />);

  fireEvent.click(getByText("Navigate to Todo Page"));
  expect(mockPush).toHaveBeenCalledWith('todo');

  useRouterMock.mockRestore();
});

// describe('Testing Home component', () => {
//   beforeEach(() => {
//     render(<Home />);
//   });

//   it('renders a heading', () => {
//     const text = screen.getByText(/Home/i);
//     expect(text).toBeInTheDocument();
//   });

//   it('renders a heading inside h1', () => {
//     const text = screen.getByRole('heading', { level: 1 });
//     expect(text).toBeInTheDocument();
//   });

//   it('test the description', () => {
//     const text = screen.getByTestId('desc');
//     expect(text.textContent).toMatch(/description/);
//   });

//   it("Test navigation to another route",()=>{
//     const mockPush = jest.fn();

//     (useRouter as jest.Mock).mockReturnValue({
//         push: mockPush
//     });

//     render(<Home />);

//     const button = screen.getByRole("button");
//     fireEvent.click(button);
//     expect(mockPush).toHaveBeenCalledWith("todo");

//   })
// });
