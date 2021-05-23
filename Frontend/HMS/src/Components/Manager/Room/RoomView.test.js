import {render, fireEvent} from '@testing-library/react';
import AddRoom from './AddRoom';

import RoomView from './RoomView';
it("checkButtonRender",()=>{
    const {queryByTitle}=render(<RoomView/>)    
    expect(queryByTitle("add")).toBeTruthy()    
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddRoom/>)    
    expect(queryByTitle("add")).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddRoom/>)    
    expect(queryByTitle("cancel")).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByPlaceholderText}=render(<AddRoom/>)
    expect(queryByPlaceholderText("Room Number")).toBeTruthy()
    expect(queryByPlaceholderText("type")).toBeTruthy()    
})

it("checkButtonRender",()=>{
    const {queryByPlaceholderText}=render(<AddRoom/>)
    expect(queryByPlaceholderText("Price")).toBeTruthy()
    expect(queryByPlaceholderText("Room Status")).toBeTruthy()    
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddRoom/>)
        const input = queryByPlaceholderText('Room Number')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).toBe("test")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddRoom/>)
        const input = queryByPlaceholderText('Room Number')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test1")
    })
})


describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddRoom/>)
        const input = queryByPlaceholderText('type')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test")
    })
}) 


describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddRoom/>)
        const input = queryByPlaceholderText('Price')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).toBe("test")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddRoom/>)
        const input = queryByPlaceholderText('Price')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test1")
    })
})


describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddRoom/>)
        const input = queryByPlaceholderText('Room Status')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test")
    })
})

describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createRoom =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddRoom createRoom={createRoom}/>)
        const input = queryByPlaceholderText('Room Status');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createRoom).not.toHaveBeenCalled();
    })
})

describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createRoom =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddRoom createRoom={createRoom}/>)
        const input = queryByPlaceholderText('Price');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createRoom).not.toHaveBeenCalled();
    })
})

describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createRoom =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddRoom createRoom={createRoom}/>)
        const input = queryByPlaceholderText('Room Number');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createRoom).not.toHaveBeenCalled();
    })
})

describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createRoom =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddRoom createRoom={createRoom}/>)
        const input = queryByPlaceholderText('type');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createRoom).not.toHaveBeenCalled();
    })
})

jest.mock('react-router',()=>({
    withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
}))