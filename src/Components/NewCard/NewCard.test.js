import React from "react";
import { shallow } from "enzyme";
import { NewCard } from "./NewCard";
import { fetchAddNote } from "../../Api/fetch/fetchAddNote";
import { fetchEditNote } from "../../Api/fetch/fetchEditNote";
import { fetchNote } from "../../Api/fetch/fetchNote";
import MockData from "../../Helpers/mockData";

jest.mock("../../Api/fetch/fetchEditNote.js");
jest.mock("../../Api/fetch/fetchAddNote.js");
jest.mock("../../Api/fetch/fetchNote.js");

describe("NewCard", () => {
  let wrapper, instance, mockEvent, mockId;

  fetchEditNote.mockImplementation(() => Promise.resolve(1));
  fetchAddNote.mockImplementation(() => Promise.resolve(1));
  fetchNote.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(<NewCard />);
    instance = wrapper.instance();
    mockEvent = { target: { value: "hello", name: "title" } };
    mockId = Date.now()
    Date.now = jest.fn()
  });

  afterEach(() => {
    fetchEditNote.mockClear();
    fetchAddNote.mockClear();
    fetchNote.mockClear();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("componentDidMount", () => {
    it("should invoke 'grabInfo' on mount", () => {
      jest.spyOn(instance, "grabInfo");
      instance.componentDidMount();
      expect(instance.grabInfo).toHaveBeenCalled();
    });
  });

  describe("grabInfo", () => {
    it("should invoke 'fetchNote' with the correct params", async () => {
      instance.grabInfo(1);
      await expect(fetchNote).toHaveBeenCalledWith(1);
    });

    it("should set state of title", () => {
      expect(wrapper.state("title")).toEqual("");
      instance.grabInfo();
      expect(wrapper.state("title")).toEqual("");
    });

    it("should set state of notes", () => {
      expect(wrapper.state("notes")).toEqual([]);
      instance.grabInfo();
      expect(wrapper.state("notes")).toEqual([]);
    });
  });

  it("should change state while typing", () => {
    const input = wrapper.find("#title");
    input.simulate("change", mockEvent);
    expect(wrapper.state("title")).toBe("hello");
  });

  describe("handleComplete", () => {
    it("should toggle complete onClick", () => {
      wrapper.setState({ notes: [{ id: 7, completed: false }] });
      const input = wrapper.find(".unchecked");
      input.simulate("click", {
        target: { value: ["hello"], name: "notes", id: 7 }
      });
      expect(wrapper.state("notes")).toEqual([{ completed: true, id: 7 }]);
    });
  });

  describe("handleSaveNote", () => {
    it("should invoke 'handleSaveNote' on save click", () => {
      wrapper.setState({ notes: [{ id: 7, completed: false }] });
      let MockFn = jest.spyOn(wrapper.instance(), "handleSaveNote");
      const saveButton = wrapper.find("[data-test='save-note']");
      saveButton.simulate("click");
      expect(MockFn).toHaveBeenCalled();
    });

    it("should invoke 'fetchAddNote' if id is not valid", () => {
      instance.handleSaveNote();
      expect(fetchAddNote).toHaveBeenCalled();
    });

    it("should invoke 'fetchEditNote' if id is valid", () => {
      instance.handleSaveNote(1);
      expect(fetchEditNote).toHaveBeenCalled();
    });
  });

  describe("handleKeyPress", () => {
    it("should call 'handleKeyPress' on enter", () => {
      let MockFn = jest.spyOn(wrapper.instance(), "handleKeyPress");
      const addItem = wrapper.find("[data-test='enter-item']");
      addItem.simulate("change", {
        target: { name: "listItem", value: "Don't do Laundry" }
      });
      expect(wrapper.state("listItem")).toEqual("Don't do Laundry");
      addItem.simulate("keypress", { key: "Enter" });
      expect(MockFn).toHaveBeenCalled();
      expect(wrapper.state("notes")).toEqual([
        {
          id: mockId,
          completed: false,
          message: "Don't do Laundry"
        }
      ]);
    });

    it("should call 'handleChange' onChange", () => {
      let MockFn = jest.spyOn(wrapper.instance(), "handleChange");
      const addItem = wrapper.find("[data-test='enter-item']");
      addItem.simulate("change", {
        target: { name: "Matt", value: "Don't do Laundry" }
      });
      expect(MockFn).toHaveBeenCalled();
    });
  });

  describe("deleteListItem", () => {
    it("should call 'deleteListItem' on 'delete-button-incomplete' onClick", () => {
      wrapper.setState({ notes: [{ id: 7, completed: false }] });
      let MockFn = jest.spyOn(wrapper.instance(), "deleteListItem");
      const deleteButton = wrapper.find(
        "[data-test='delete-button-incomplete']"
      );
      deleteButton.simulate("click");
      expect(MockFn).toHaveBeenCalled();
    });

    it("should call 'deleteListItem' on 'delete-button-complete' onClick", () => {
      wrapper.setState({ notes: [{ id: 7, completed: true }] });
      let MockFn = jest.spyOn(wrapper.instance(), "deleteListItem");
      const deleteButton = wrapper.find("[data-test='delete-button-complete']");
      deleteButton.simulate("click");
      expect(MockFn).toHaveBeenCalled();
    });

    it("should update the state of notes when invoked", () => {
      wrapper.setState({ notes: MockData.mockNotes });
      instance.deleteListItem("cSKfF_h1u");
      expect(wrapper.state("notes")).toEqual(MockData.mockDeteleNote);
    });
  });

  describe("editListItem", () => {
    it("should invoke 'editListItem' on incomplete list items (onChange)", () => {
      wrapper.setState({ notes: MockData.mockIncompletedListItem });
      let MockFn = jest.spyOn(wrapper.instance(), "editListItem");
      const input = wrapper.find("[data-test='todo']");
      input.simulate("change", {
        target: { value: ["hello"], name: "notes", id: 1561322364956 }
      });
      expect(MockFn).toHaveBeenCalled();
    });

    it("should invoke 'editListItem' on complete list items (onChange)", () => {
      wrapper.setState({ notes: MockData.mockCompletedListItem });
      let MockFn = jest.spyOn(wrapper.instance(), "editListItem");
      const input = wrapper.find("[data-test='completed']");
      input.simulate("change", {
        target: { value: ["hello"], name: "notes", id: 1561322247832 }
      });
      expect(MockFn).toHaveBeenCalled();
    });

    it("should update the state of notes when invoked", () => {
      wrapper.setState({ notes: MockData.mockIncompletedListItem });
      instance.editListItem(1561322354092, {
        target: { value: "Don't do Laundry" }
      });
      expect(wrapper.state("notes")).toEqual(MockData.mockEditListItem);
    });
  });
});
