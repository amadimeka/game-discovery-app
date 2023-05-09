// import axiosClient from "./api-client";
// interface DataResult {
//     id: number;
//     name: string;
//   }
//   interface FetchGamesResponse {
//     count: number;
//     result: DataResult[];
//   }

// export const fetchGames = async (): Promise<DataResult[]> => {
//     try {
//       const { data } = await axiosClient.get(
//         `/games`
//       );
  
//       return { data?.data.result };
//     } catch (error) {
//       return { error, success: false };
//     }
//   };