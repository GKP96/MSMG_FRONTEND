export const header = {
    "Content-Type": "application/json",
    "Authorization":"",
  };
  
  export const setHeader = (token) =>{
    header.Authorization = `Bearer ${token}`
    return header;
  }
  
  export const url = "https://vercel-demo-murex-nine.vercel.app";
  