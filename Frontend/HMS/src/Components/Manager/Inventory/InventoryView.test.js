import {render, fireEvent} from '@testing-library/react';
import AddInventory from './AddInventory';
import InventoryView from './InventoryView';

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<InventoryView/>)
    expect(queryByTitle("addinv")).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddInventory/>)
    expect(queryByTitle("add")).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddInventory/>)    
    expect(queryByTitle("cancel")).toBeTruthy()
    
})

it("checkButtonRender",()=>{
    const {queryByPlaceholderText}=render(<AddInventory/>)
    expect(queryByPlaceholderText("no. of units")).toBeTruthy()
    expect(queryByPlaceholderText("Inventory Name")).toBeTruthy()    
})


describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddInventory/>)
        const input = queryByPlaceholderText('Inventory Name')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).toBe("test")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddInventory/>)
        const input = queryByPlaceholderText('no. of units')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).toBe("test")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddInventory/>)
        const input = queryByPlaceholderText('Inventory Name')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test1")
    })
})

describe("Input Value", ()=>{
    it("updates on change", ()=>{
        const {queryByPlaceholderText}=render(<AddInventory/>)
        const input = queryByPlaceholderText('no. of units')
        fireEvent.change(input, {target: {value: "test"}})
        expect(input.value).not.toBe("test1")
    })
})


describe("button with data inside", ()=>{
    it("triggers button", ()=>{
        const createInventory =jest.fn();
        const {queryByTitle, queryByPlaceholderText} = render(<AddInventory createInventory={createInventory}/>)
        const input = queryByPlaceholderText('Inventory Name');
        fireEvent.change(input, {target: {value: "test"}});

        fireEvent.click(queryByTitle('add'))
        expect(createInventory).not.toHaveBeenCalled();
    })
})

jest.mock('react-router',()=>({
    withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
}))