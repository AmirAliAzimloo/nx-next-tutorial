import '@testing-library/jest-dom'


function sum(a:number,b:number){
    return a + b;
}

test("Adds 2+3 should be wqual to 5",()=>{
    expect(sum(2,3)).toBe(5);
})