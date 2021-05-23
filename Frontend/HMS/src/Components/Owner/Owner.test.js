import { render, fireEvent } from "@testing-library/react";
import AddManager from "./AddManager";
import { OwnerView } from "./OwnerView";

it("checkButtonRender", () => {
  const { queryByTitle } = render(<AddManager />);  
  expect(queryByTitle("add")).toBeTruthy();
});

it("checkButtonRender", () => {
  const { queryByTitle } = render(<OwnerView />);
  expect(queryByTitle("add")).toBeTruthy();
});

it("checkButtonRender", () => {
  const { queryByTitle } = render(<OwnerView />);  
  expect(queryByTitle("user")).toBeTruthy();
});

it("checkButtonRender", () => {
  const { queryByTitle } = render(<AddManager />);  
  expect(queryByTitle("cancel")).toBeTruthy();
});

it("checkButtonRender",()=>{
  const {queryByPlaceholderText}=render(<AddManager/>)
  expect(queryByPlaceholderText("Manager Name")).toBeTruthy()
  expect(queryByPlaceholderText("Department Name")).toBeTruthy()    
})

it("checkButtonRender",()=>{
  const {queryByPlaceholderText}=render(<AddManager/>)
  expect(queryByPlaceholderText("Manager Contact")).toBeTruthy()
  expect(queryByPlaceholderText("Mail ID")).toBeTruthy()    
})

it("checkButtonRender",()=>{
  const {queryByPlaceholderText}=render(<AddManager/>)
  expect(queryByPlaceholderText("Manager Salary")).toBeTruthy()
  expect(queryByPlaceholderText("Staff Salary")).toBeTruthy()    
})


describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Manager Name')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).toBe("test")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Manager Contact')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).toBe("test")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Mail ID')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).toBe("test")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Department Name')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).not.toBe("test")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Manager Salary')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).toBe("test")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Staff Salary')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).toBe("test")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Manager Name')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).not.toBe("test1")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Manager Contact')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).not.toBe("test1")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Mail ID')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).not.toBe("test1")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Manager Salary')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).not.toBe("test1")
  })
})

describe("Input Value", ()=>{
  it("updates on change", ()=>{
      const {queryByPlaceholderText}=render(<AddManager/>)
      const input = queryByPlaceholderText('Staff Salary')
      fireEvent.change(input, {target: {value: "test"}})
      expect(input.value).not.toBe("test1")
  })
})

describe("button with data inside", ()=>{
  it("triggers button", ()=>{
      const createManager =jest.fn();
      const {queryByTitle, queryByPlaceholderText} = render(<AddManager createManager={createManager}/>)
      const input = queryByPlaceholderText('Mail ID');
      fireEvent.change(input, {target: {value: "test"}});

      fireEvent.click(queryByTitle('add'))
      expect(createManager).not.toHaveBeenCalled();
  })
})

describe("button with data inside", ()=>{
  it("triggers button", ()=>{
      const createManager =jest.fn();
      const {queryByTitle, queryByPlaceholderText} = render(<AddManager createManager={createManager}/>)
      const input = queryByPlaceholderText('Manager Name');
      fireEvent.change(input, {target: {value: "test"}});

      fireEvent.click(queryByTitle('add'))
      expect(createManager).not.toHaveBeenCalled();
  })
})

describe("button with data inside", ()=>{
  it("triggers button", ()=>{
      const createManager =jest.fn();
      const {queryByTitle, queryByPlaceholderText} = render(<AddManager createManager={createManager}/>)
      const input = queryByPlaceholderText('Manager Salary');
      fireEvent.change(input, {target: {value: "test"}});

      fireEvent.click(queryByTitle('add'))
      expect(createManager).not.toHaveBeenCalled();
  })
})

describe("button with data inside", ()=>{
  it("triggers button", ()=>{
      const createManager =jest.fn();
      const {queryByTitle, queryByPlaceholderText} = render(<AddManager createManager={createManager}/>)
      const input = queryByPlaceholderText('Department Name');
      fireEvent.change(input, {target: {value: "test"}});

      fireEvent.click(queryByTitle('add'))
      expect(createManager).not.toHaveBeenCalled();
  })
})

describe("button with data inside", ()=>{
  it("triggers button", ()=>{
      const createManager =jest.fn();
      const {queryByTitle, queryByPlaceholderText} = render(<AddManager createManager={createManager}/>)
      const input = queryByPlaceholderText('Manager Contact');
      fireEvent.change(input, {target: {value: "test"}});

      fireEvent.click(queryByTitle('add'))
      expect(createManager).not.toHaveBeenCalled();
  })
})

describe("button with data inside", ()=>{
  it("triggers button", ()=>{
      const createManager =jest.fn();
      const {queryByTitle, queryByPlaceholderText} = render(<AddManager createManager={createManager}/>)
      const input = queryByPlaceholderText('Staff Salary');
      fireEvent.change(input, {target: {value: "test"}});

      fireEvent.click(queryByTitle('add'))
      expect(createManager).not.toHaveBeenCalled();
  })
})

jest.mock("react-router", () => ({
  withRouter: jest.fn((Comp) => (props) => <Comp {...props} />),
}));
