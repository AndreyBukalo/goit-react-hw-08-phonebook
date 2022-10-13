import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from './auth';
import { setAuthHeader } from './auth';



const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};




const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,  
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.meta.arg);
  
      console.log(action);
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const ContactsReducer = ContactsSlice.reducer;






// const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints(build) {
//     return {
//       fetchContacts: build.query({
//         query: () => ({ url: '/contacts', method: 'get' }),
//         providesTags: ['Contacts'],
//       }),
//       deleteContact: build.mutation({
//         query: contactID => ({
//           url: `/contacts/${contactID}`,
//           method: 'DELETE',
//         }),
//         invalidatesTags: ['Contacts'],
//       }),
//       createContact: build.mutation({
//         query: ({ name, number, avatar }) => ({
//           url: '/contacts',
//           method: 'post',
//           body: {
//             name,
//             phone: number,
//             avatar,
//           },
//         }),
//         invalidatesTags: ['Contacts'],
//       }),
//     };
//   },
// });



// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;

//       // If we have a token set in state, let's assume that we should be passing it.
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }

//       return headers;
//     },
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contacts'],
//     }),
//     deleteCont: builder.mutation({
//       query: contactID => ({
//         url: `/contacts/${contactID}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     createContact: builder.mutation({
//       query: ({ name, number }) => ({
//         url: '/contacts',
//         method: 'POST',
//         body: {
//           name,
//           number,
      
//         },
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useDeleteContMutation,
//   useCreateContactMutation,
// } = contactsApi;
