import { createSlice } from '@reduxjs/toolkit';

interface IQueryState
{
    search?: string;
    category?: string;
    rating?: string;
    year?: string;
}

const queryReducer = createSlice({
    name: 'queryState',
    initialState: {
        search: ''
    } as IQueryState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { setSearch } = queryReducer.actions;

export default queryReducer.reducer;