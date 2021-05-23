import {render, fireEvent} from '@testing-library/react';
import { AddStaff } from './AddStaff';

import StaffView from './StaffView';
it("checkButtonRender",()=>{
    const {queryByTitle}=render(<StaffView/>)    
    expect(queryByTitle("add")).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddStaff/>)    
    expect(queryByTitle("add")).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddStaff/>)    
    expect(queryByTitle("cancel")).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByPlaceholderText}=render(<AddStaff/>)
    expect(queryByPlaceholderText("Employee Name")).toBeTruthy()
    expect(queryByPlaceholderText("Department Name")).toBeTruthy()    
})

it("checkButtonRender",()=>{
    const {queryByPlaceholderText}=render(<AddStaff/>)
    expect(queryByPlaceholderText("Employee Contact")).toBeTruthy()
    expect(queryByPlaceholderText("Mail ID")).toBeTruthy()    
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddStaff/>)
        const input = queryByPlaceholderText('Employee Name')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).toBe("test")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddStaff/>)
        const input = queryByPlaceholderText('Employee Name')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test1")
    })
})


describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddStaff/>)
        const input = queryByPlaceholderText('Department Name')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test1")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddStaff/>)
        const input = queryByPlaceholderText('Employee Contact')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).toBe("test")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddStaff/>)
        const input = queryByPlaceholderText('Employee Contact')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test1")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddStaff/>)
        const input = queryByPlaceholderText('Mail ID')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).toBe("test")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddStaff/>)
        const input = queryByPlaceholderText('Mail ID')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test1")
    })
})

describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createStaff =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddStaff createStaff={createStaff}/>)
        const input = queryByPlaceholderText('Mail ID');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createStaff).not.toHaveBeenCalled();
    })
})

describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createStaff =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddStaff createStaff={createStaff}/>)
        const input = queryByPlaceholderText('Employee Contact');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createStaff).not.toHaveBeenCalled();
    })
})

describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createStaff =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddStaff createStaff={createStaff}/>)
        const input = queryByPlaceholderText('Department Name');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createStaff).not.toHaveBeenCalled();
    })
})

describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createStaff =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddStaff createStaff={createStaff}/>)
        const input = queryByPlaceholderText('Employee Name');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createStaff).not.toHaveBeenCalled();
    })
})




jest.mock('react-router',()=>({
    withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
}))