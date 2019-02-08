
const HomeInfo = {"msg":"Hello world from api..."};

class HomeInfoApi {

    static getAllHomeInfo() {
        //debugger;
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(Object.assign([],HomeInfo));
            },10);
        });
    }

}

export default HomeInfoApi;
