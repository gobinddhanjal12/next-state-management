import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("quotes/fetchQuotes", async () => {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    return data.quotes;
});

const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        quotes: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuotes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchQuotes.fulfilled, (state, action) => {
                state.loading = false;
                state.quotes = action.payload;
            })
            .addCase(fetchQuotes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default quotesSlice.reducer;