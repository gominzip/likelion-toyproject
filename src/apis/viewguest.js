import axios from "axios";

export const baseUrl = `http://bangmyeonglock.kro.kr:8000/posts`;

export const getAllPost = () =>{
    try {
        return axios.get(`${baseUrl}/`);
    } catch (error) {
        console.log("get 실패 에러:", error);
    }
}

export const getSinglePost = (id) =>{
    return axios.get(`${baseUrl}/${id}/`);
}

export const deletePost = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}/`);
      window.location.reload();
    } catch (error) {
      console.log("delete 실패 에러:", error);
    }
  };