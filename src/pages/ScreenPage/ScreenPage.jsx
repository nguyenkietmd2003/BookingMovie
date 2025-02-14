import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ListGhe from "./ListGhe/ListGhe";
import { useParams } from 'react-router-dom';
import { turnOffLoading, turnOnLoading } from '../../redux/loadingReducer/loadingSlice';
import ThongTinphim from "./ThongTinPhim/ThongTinphim";

//
const ScreenPage = () => {
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(turnOnLoading());
    setTimeout(()=>{
     dispatch(turnOffLoading());
    },2000)
  }
  , []); 

  return (
    <div className="flex">
      <ListGhe maLichChieu={maLichChieu}/>
      <ThongTinphim maLichChieu={maLichChieu}/>
    </div>
  );
};

export default ScreenPage;
