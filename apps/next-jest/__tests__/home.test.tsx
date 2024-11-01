import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/components/home';

describe("Testing Home component",()=>{

    beforeEach(()=>{
        render(<Home />);
    });

    it("renders a heading",()=>{
        const text = screen.getByText(/Home/i);
        expect(text).toBeInTheDocument();
    });

    it("renders a heading inside h1",()=>{
        const text = screen.getByRole("heading",{ level:1 });
        expect(text).toBeInTheDocument();
    });
})