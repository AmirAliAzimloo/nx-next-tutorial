import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../src/components/home';
import Todos from '../src/components/todos';

const originalFetch = global.fetch;

describe("Testing Todos component",()=>{

    afterEach(()=>{
        global.fetch = originalFetch;
    });

    it("Should fetch todos from API and update state",async ()=>{
        const mockTodos = [
            { id: 1, title: "Todo 1" },
            { id: 2, title: "Todo 2" },
        ];

        global.fetch = jest.fn(()=>
        Promise.resolve({
            json: ()=> Promise.resolve(mockTodos),
        } as Response)
        );

        render(
            <Todos />
        );

        await waitFor(()=>{
            expect(screen.getByText("Todo 1")).toBeInTheDocument();
            expect(screen.getByText("Todo 2")).toBeInTheDocument();
        });

        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos")


    });

})