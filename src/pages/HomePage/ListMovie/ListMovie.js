import React, { useEffect, useState } from "react";
import { movieSer } from "../../../service/movieService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  turnOffLoading,
  turnOnLoading,
} from "../../../redux/loadingReducer/loadingSlice";

const ListMovie = () => {
  //Hook
  const [dataMovieList, setDataMovieList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // call api
    fetchListMovie();
  }, []);

  //Function
  const navigatePageDetail = (id) => {
    navigate(`detail-movie/${id}`);
  };
  let fetchListMovie = async () => {
    dispatch(turnOnLoading());
    try {
      const data = await movieSer.getListMovie();
      console.log("data List: ", data);

      let movieList = data.data.content;
      setDataMovieList(movieList);
      setTimeout(() => {
        dispatch(turnOffLoading());
      }, 1500);
    } catch (err) {
      console.log("err: ", err);
    }
  };
  const renderListMovie = () => {
    // optional chaining operator
    // dataMovieList ? "" : ""

    return dataMovieList?.map((movie) => {
      return (
        <div
          onClick={() => {
            navigatePageDetail(movie.maPhim);
          }}
          key={movie.maPhim}
          className="border rounded"
        >
          <div className="h-96">
            {/* img  */}
            <img
              src={movie.hinhAnh}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* content  */}
          <div className="p-3 space-y-2">
            <p className="font-medium">{movie.tenPhim}</p>
            <p className="text-sm text-gray-400">
              {movie.moTa.substring(0, 50)}...
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container max-w-7xl mx-auto py-5">
      <h3 className="text-xl font-medium">Danh sách phim</h3>

      {/* Danh sách phim */}
      <div className="grid grid-cols-4 gap-9">{renderListMovie()}</div>
    </div>
  );
};

export default ListMovie;
