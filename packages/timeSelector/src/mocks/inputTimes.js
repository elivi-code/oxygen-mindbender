const mockInputs = [
  {
    input: '2',
    expectedOutput: {
      hours: 2,
      minutes: 0,
      seconds: 0,
    },
  },
  {
    input: '21',
    expectedOutput: {
      hours: 21,
      minutes: 0,
      seconds: 0,
    },
  },
  {
    input: '222',
    expectedOutput: {
      hours: 22,
      minutes: 2,
      seconds: 0,
    },
  },
  {
    input: '2122',
    expectedOutput: {
      hours: 21,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '2:22',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21:22',
    expectedOutput: {
      hours: 21,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21:2',
    expectedOutput: {
      hours: 21,
      minutes: 2,
      seconds: 0,
    },
  },
  {
    input: '2.22.22',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '21.22.22',
    expectedOutput: {
      hours: 21,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '22222',
    expectedOutput: {
      hours: 22,
      minutes: 22,
      seconds: 2,
    },
  },
  {
    input: '212222',
    expectedOutput: {
      hours: 21,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '2:22:22',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '21:22:22',
    expectedOutput: {
      hours: 21,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '2AM',
    expectedOutput: {
      hours: 2,
      minutes: 0,
      seconds: 0,
    },
  },
  {
    input: '11AM',
    expectedOutput: {
      hours: 11,
      minutes: 0,
      seconds: 0,
    },
  },
  {
    input: '21AM',
    expectedOutput: {
      hours: 2,
      minutes: 1,
      seconds: 0,
    },
  },
  {
    input: '2PM',
    expectedOutput: {
      hours: 14,
      minutes: 0,
      seconds: 0,
    },
  },
  {
    input: '21PM',
    expectedOutput: {
      hours: 14,
      minutes: 1,
      seconds: 0,
    },
  },
  {
    input: '2TM',
    expectedOutput: undefined,
  },
  {
    input: '2AM22',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '11AM22',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21AM22',
    expectedOutput: undefined,
  },
  {
    input: '2PM22',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21PM22',
    expectedOutput: undefined,
  },
  {
    input: '2TM22',
    expectedOutput: undefined,
  },
  {
    input: '222AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '1122AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '2122AM',
    expectedOutput: {
      hours: 2,
      minutes: 12,
      seconds: 2,
    },
  },
  {
    input: '222PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '2122PM',
    expectedOutput: {
      hours: 14,
      minutes: 12,
      seconds: 2,
    },
  },
  {
    input: '222TM',
    expectedOutput: undefined,
  },
  {
    input: '2:22AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '11:22AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21:22AM',
    expectedOutput: undefined,
  },
  {
    input: '2:22PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21:22PM',
    expectedOutput: undefined,
  },
  {
    input: '2:22TM',
    expectedOutput: undefined,
  },
  {
    input: '22:2AM',
    expectedOutput: undefined,
  },
  {
    input: '2:22 AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '11:22 AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21:22 AM',
    expectedOutput: undefined,
  },
  {
    input: '2:22 PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21:22 PM',
    expectedOutput: undefined,
  },
  {
    input: '2:22 TM',
    expectedOutput: undefined,
  },
  {
    input: '22:2 AM',
    expectedOutput: undefined,
  },
  {
    input: '2.22AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '11.22AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21.22AM',
    expectedOutput: undefined,
  },
  {
    input: '2.22PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21.22PM',
    expectedOutput: undefined,
  },
  {
    input: '2.22TM',
    expectedOutput: undefined,
  },
  {
    input: '22.2AM',
    expectedOutput: undefined,
  },
  {
    input: '2.22 AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '11.22 AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21.22 AM',
    expectedOutput: undefined,
  },
  {
    input: '2.22 PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 0,
    },
  },
  {
    input: '21.22 PM',
    expectedOutput: undefined,
  },
  {
    input: '2.22 TM',
    expectedOutput: undefined,
  },
  {
    input: '22.2 AM',
    expectedOutput: undefined,
  },
  {
    input: '2:22:22AM',
    expectedOutput: undefined,
  },
  {
    input: '11:22:22AM',
    expectedOutput: undefined,
  },
  {
    input: '21:22:22AM',
    expectedOutput: undefined,
  },
  {
    input: '2:22:22PM',
    expectedOutput: undefined,
  },
  {
    input: '21:22:22PM',
    expectedOutput: undefined,
  },
  {
    input: '2:22:22TM',
    expectedOutput: undefined,
  },
  {
    input: '22:2:22AM',
    expectedOutput: undefined,
  },
  {
    input: '22:22:2AM',
    expectedOutput: undefined,
  },
  {
    input: '2:22:22 AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '11:22:22 AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '21:22:22 AM',
    expectedOutput: undefined,
  },
  {
    input: '2:22:22 PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '21:22:22 PM',
    expectedOutput: undefined,
  },
  {
    input: '2:22:22 TM',
    expectedOutput: undefined,
  },
  {
    input: '22:2:22 AM',
    expectedOutput: undefined,
  },
  {
    input: '22:22:2 AM',
    expectedOutput: undefined,
  },
  {
    input: '2.22.22AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '11.22.22AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '21.22.22AM',
    expectedOutput: undefined,
  },
  {
    input: '2.22.22PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '21.22.22PM',
    expectedOutput: undefined,
  },
  {
    input: '2.22.22TM',
    expectedOutput: undefined,
  },
  {
    input: '22.2.22AM',
    expectedOutput: undefined,
  },
  {
    input: '22.22.2AM',
    expectedOutput: undefined,
  },
  {
    input: '2.22.22 AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '11.22.22 AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '21.22.22 AM',
    expectedOutput: undefined,
  },
  {
    input: '2.22.22 PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '21.22.22 PM',
    expectedOutput: undefined,
  },
  {
    input: '2.22.22 TM',
    expectedOutput: undefined,
  },
  {
    input: '22.2.22 AM',
    expectedOutput: undefined,
  },
  {
    input: '22.22.2 AM',
    expectedOutput: undefined,
  },
  {
    input: '22222AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '112222AM',
    expectedOutput: {
      hours: 11,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '212222AM',
    expectedOutput: undefined,
  },
  {
    input: '22222PM',
    expectedOutput: {
      hours: 14,
      minutes: 22,
      seconds: 22,
    },
  },
  {
    input: '212222PM',
    expectedOutput: undefined,
  },
  {
    input: '22222TM',
    expectedOutput: undefined,
  },
  {
    input: '22222AM',
    expectedOutput: {
      hours: 2,
      minutes: 22,
      seconds: 22,
    },
  },
];

export default mockInputs;
