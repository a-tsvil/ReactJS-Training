import React from 'react';
import { expect } from 'chai';

import dataHandler from '../../src/Reducers';
import {
  ADD_DATA,
  REMOVE_DATA,
  REQUEST_DATA,
  GET_DATA,
  UPDATE_DATA
} from '../../src/Actions';
import { mockData } from '../../src/Actions';

describe('Reducer test', () => {
  const mockState = {
    data: []
  };

  it('should handle GET_DATA', () => {
    var mockAction = { type: ADD_DATA, data: mockData, timeStamp: 'now' };
    var expected = {
      isPending: false,
      data: mockData,
      addedAt: 'now'
    }
    var result = dataHandler(mockState, mockAction);
    expect(result).to.deep.equal(expected);
  });
});