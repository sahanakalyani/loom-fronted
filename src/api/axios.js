import axios from"axios"
 
const api=axios.create({
 baseURL:import.meta.env.VITE_BASE_URL,
 headers:{"Content-type":"application/json"},   
})

api.interceptors.request.use((config)=>{
    returnconfig
});
api.intereceptors.response.use(
    (res)=>res,
    (err)=>{
        if(!error.response){
            return Promise.reject({
                status:null,
                message:"Network Error!",
            });
            const{status,data}=error.response;
            if(status===401){
                //TODO:handle unauthorization

            }
            return pormise. reject({
                status,
                meassage:data?.error || data?.message || "something wentwrong,"
                
            });
        }
    },
)