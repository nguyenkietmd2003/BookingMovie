import { createSlice } from "@reduxjs/toolkit";
import { getListGheThunk } from "./movieThunk";

const initialState = {
  listGhe: [],
  listGheDangDat: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    addGheAction: (state, action) => {
      let ghe = action.payload;
      let index = state.listGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (index !== -1) {
        state.listGheDangDat.splice(index, 1);
      } else {
        state.listGheDangDat.push(ghe);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListGheThunk.fulfilled, (state, action) => {
      let infoScreenPage = action.payload;
      let listGhe = infoScreenPage.danhSachGhe.slice(0, 100);
      state.listGhe = listGhe;
    });
  },
});

export const { addGheAction } = movieSlice.actions;

export default movieSlice.reducer;
