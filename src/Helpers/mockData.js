const mockNotes = [
  {
    id: "cSKfF_h1u",
    title: "TO DO",
    list: [
      {
        id: 1561321889408,
        message: "Laundry",
        completed: false
      },
      {
        id: 1561321906747,
        message: "Clean Apartment",
        completed: true
      },
      {
        id: 1561321910954,
        message: "Walk Dog",
        completed: false
      },
      {
        id: 1561321919280,
        message: "Call Lauren",
        completed: false
      }
    ]
  },
  {
    id: "YH0NV06zt",
    title: "GROCERY LIST",
    list: [
      {
        id: 1561322058376,
        message: "Bananas",
        completed: false
      },
      {
        id: 1561322064771,
        message: "Avocados",
        completed: false
      },
      {
        id: 1561322067269,
        message: "Bread",
        completed: false
      },
      {
        id: 1561322069725,
        message: "Eggs",
        completed: false
      },
      {
        id: 1561322075478,
        message: "Almond Milk",
        completed: false
      },
      {
        id: 1561322079056,
        message: "Tomatos",
        completed: false
      },
      {
        id: 1561322084479,
        message: "Cottage Cheese",
        completed: false
      },
      {
        id: 1561322088956,
        message: "Hummus",
        completed: false
      },
      {
        id: 1561322094737,
        message: "Orange Juice",
        completed: false
      }
    ]
  },
  {
    id: "F749MykcS",
    title: "JOB PREP",
    list: [
      {
        id: 1561322131827,
        message: "Start Resume",
        completed: true
      },
      {
        id: 1561322152007,
        message: "Send Resume to Allison for review ",
        completed: false
      },
      {
        id: 1561322161014,
        message: "Update Linkedin",
        completed: true
      },
      {
        id: 1561322167487,
        message: "Warm Outreach",
        completed: true
      },
      {
        id: 1561322182979,
        message: "Apply, Apply, APPLY!",
        completed: false
      }
    ]
  },
  {
    id: "yKIYMMc7Z",
    title: "BIRTHDAY SUPPLIES",
    list: [
      {
        id: 1561322241889,
        message: "Balloons",
        completed: true
      },
      {
        id: 1561322243632,
        message: "Cake",
        completed: true
      },
      {
        id: 1561322247832,
        message: "Party Hats",
        completed: false
      },
      {
        id: 1561322251162,
        message: "Pinata",
        completed: true
      },
      {
        id: 1561322256068,
        message: "Chairs",
        completed: false
      },
      {
        id: 1561322258148,
        message: "Cups",
        completed: true
      },
      {
        id: 1561322259902,
        message: "Tables",
        completed: false
      }
    ]
  },
  {
    id: "LBWHep866",
    title: "PROJECT TODO",
    list: [
      {
        id: 1561322354092,
        message: "Create README",
        completed: false
      },
      {
        id: 1561322364956,
        message: "Finish testing",
        completed: false
      }
    ]
  },
  {
    id: "wjLNN59Gv",
    title: "WEEKLY PRACTICE",
    list: [
      {
        id: 1561322465963,
        message: "Jest/Enzyme Testing",
        completed: true
      },
      {
        id: 1561322471939,
        message: "Node.js",
        completed: false
      },
      {
        id: 1561322476074,
        message: "Express.js",
        completed: false
      },
      {
        id: 1561322481803,
        message: "React.js",
        completed: true
      },
      {
        id: 1561322498858,
        message: "HTTP Request cycle",
        completed: true
      }
    ]
  }
];

const mockDeteleNote = [
  {
    id: "YH0NV06zt",
    title: "GROCERY LIST",
    list: [
      {
        id: 1561322058376,
        message: "Bananas",
        completed: false
      },
      {
        id: 1561322064771,
        message: "Avocados",
        completed: false
      },
      {
        id: 1561322067269,
        message: "Bread",
        completed: false
      },
      {
        id: 1561322069725,
        message: "Eggs",
        completed: false
      },
      {
        id: 1561322075478,
        message: "Almond Milk",
        completed: false
      },
      {
        id: 1561322079056,
        message: "Tomatos",
        completed: false
      },
      {
        id: 1561322084479,
        message: "Cottage Cheese",
        completed: false
      },
      {
        id: 1561322088956,
        message: "Hummus",
        completed: false
      },
      {
        id: 1561322094737,
        message: "Orange Juice",
        completed: false
      }
    ]
  },
  {
    id: "F749MykcS",
    title: "JOB PREP",
    list: [
      {
        id: 1561322131827,
        message: "Start Resume",
        completed: true
      },
      {
        id: 1561322152007,
        message: "Send Resume to Allison for review ",
        completed: false
      },
      {
        id: 1561322161014,
        message: "Update Linkedin",
        completed: true
      },
      {
        id: 1561322167487,
        message: "Warm Outreach",
        completed: true
      },
      {
        id: 1561322182979,
        message: "Apply, Apply, APPLY!",
        completed: false
      }
    ]
  },
  {
    id: "yKIYMMc7Z",
    title: "BIRTHDAY SUPPLIES",
    list: [
      {
        id: 1561322241889,
        message: "Balloons",
        completed: true
      },
      {
        id: 1561322243632,
        message: "Cake",
        completed: true
      },
      {
        id: 1561322247832,
        message: "Party Hats",
        completed: false
      },
      {
        id: 1561322251162,
        message: "Pinata",
        completed: true
      },
      {
        id: 1561322256068,
        message: "Chairs",
        completed: false
      },
      {
        id: 1561322258148,
        message: "Cups",
        completed: true
      },
      {
        id: 1561322259902,
        message: "Tables",
        completed: false
      }
    ]
  },
  {
    id: "LBWHep866",
    title: "PROJECT TODO",
    list: [
      {
        id: 1561322354092,
        message: "Create README",
        completed: false
      },
      {
        id: 1561322364956,
        message: "Finish testing",
        completed: false
      }
    ]
  },
  {
    id: "wjLNN59Gv",
    title: "WEEKLY PRACTICE",
    list: [
      {
        id: 1561322465963,
        message: "Jest/Enzyme Testing",
        completed: true
      },
      {
        id: 1561322471939,
        message: "Node.js",
        completed: false
      },
      {
        id: 1561322476074,
        message: "Express.js",
        completed: false
      },
      {
        id: 1561322481803,
        message: "React.js",
        completed: true
      },
      {
        id: 1561322498858,
        message: "HTTP Request cycle",
        completed: true
      }
    ]
  }
];

const mockIncompletedListItem = [
  {
    "id": 1561322354092,
    "message": "Do Laundry",
    "completed": false
  }
];

const mockEditListItem = [
  {
    "id": 1561322354092,
    "message": "Don't do Laundry",
    "completed": false
  }
];

const mockCompletedListItem = [
  {
    "id": 1561322247832,
    "message": "Do Laundry",
    "completed": true
  }
];

module.exports = {
  mockNotes,
  mockDeteleNote,
  mockIncompletedListItem,
  mockEditListItem,
  mockCompletedListItem
};
