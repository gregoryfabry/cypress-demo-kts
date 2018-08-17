import * as hourTrackerActions from '../actions/HourTrackerActions';

export const initialState = {
  entries: [],
  nextId: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case hourTrackerActions.ADD_ENTRY: {
      return Object.assign({}, state, {
        entries: state.entries.concat({ id: state.nextId.toString(), hours: 0, title: '' }),
        nextId: state.nextId + 1,
      });
    }

    case hourTrackerActions.UPDATE_ENTRY_TITLE: {
      return Object.assign({}, state, {
        entries: state.entries.map((entry) => {
          if (entry.id === action.payload.id) {
            return Object.assign({}, entry, {
              title: action.payload.title,
            });
          }

          return entry;
        })
      })
    }

    case hourTrackerActions.UPDATE_ENTRY_HOURS: {
      return Object.assign({}, state, {
        entries: state.entries.map((entry) => {
          if (entry.id === action.payload.id) {
            return Object.assign({}, entry, {
              hours: action.payload.hours,
            });
          }

          return entry;
        })
      })
    }

    case hourTrackerActions.UPDATE_ENTRY_RATE: {
      return Object.assign({}, state, {
        entries: state.entries.map((entry) => {
          if (entry.id === action.payload.id) {
            return Object.assign({}, entry, {
              hours: action.payload.rate,
            });
          }

          return entry;
        })
      })
    }

    default: {
      return state;
    }
  }
};
