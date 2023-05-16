import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContact: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        const contactIndex = state.contacts.items.findIndex(
          contact => contact.id === payload
        );
        state.contacts.items.splice(contactIndex, 1);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, { payload }) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      );
  },
});

export const { filterContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
