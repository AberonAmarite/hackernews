import { createSlice } from "@reduxjs/toolkit";
import { Story } from "./Story";

const storiesSlice = createSlice({
  name: "stories",
  initialState: [] as Story[],
  reducers: {
    addStoryDetails(state, action: { payload: Story }) {
      state.push(action.payload);
    },
  },
});

export const { addStoryDetails } = storiesSlice.actions;
export default storiesSlice.reducer;
