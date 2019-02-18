
const testAdd = (data)=>{
    return {
        type:'TEST_ADD',
        payload : data
    }
}

const test2Add = (data)=>{
    return {
        type:'TEST_2_ADD',
        payload : data
    }
}

const error = (err)=>{
    return {
        type:'ERROR',
        payload : err
    }
}
export default { testAdd , test2Add , error }