export const ADD_DATA = 'ADD_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const GET_DATA = 'GET_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

export const getData = data => ({
  type: GET_DATA,
  data,
  timeStamp: Date.now()
});

export const requestData = data => ({
  type: REQUEST_DATA,
  data
});

export const updateData = data => ({
  type: UPDATE_DATA,
  data,
  timeStamp: Date.now()
});

export const addData = row => ({
  type: ADD_DATA,
  data: data.push(row),
  timeStamp: Date.now()
});

export const updateDataCall = (oldData, newData) => dispatch => {
    dispatch(requestData(oldData));
    setTimeout(() => {
      dispatch(updateData(newData))
    }, 3000);
  };

export const getDataCall = () => dispatch => {
  dispatch(requestData([]));
  setTimeout(() => {
    dispatch(getData(mockData));
  }, 3000);
};

// dispatch(addData());


let mockData = [{
  id: '0',
  data: 'some textual data'
}, {
  id: '1',
  data: 'some textual data 1 asd'
}, {
  id: '2',
  data: 'some textual data 2 asdasdasdasdasd'
}, {
  id: '3',
  data: 'some textual data 3'
}, {
  id: '4',
  data: 'some textual data 4 asdasdasd'
}, {
  id: '5',
  data: 'some textual data 5 lorem asda sdasd asdaasdasd'
}, ];
