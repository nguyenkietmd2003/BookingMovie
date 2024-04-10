import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { movieSer } from '../../../service/movieService';

const ThongTinphim = ({maLichChieu}) => {
    const dispatch = useDispatch();
    const [dataPhim,setDataPhim]= useState();

    const fetchDetailMovie = async () => {
        try {
          let data = await movieSer.getInformationTicket(maLichChieu);
          let dataFinal =data.data.content.thongTinPhim; 
          setDataPhim(dataFinal);
          console.log('data from information phim',dataFinal)

        } catch (error) {
          console.log(error);
        }
      };
      useEffect(()=>{
        fetchDetailMovie()
      },[])
    
  return (
    <div className='container h-screen w-2/5 bg-gray-700'>
        Thong tin Phim 
    </div>
  )
}

export default ThongTinphim