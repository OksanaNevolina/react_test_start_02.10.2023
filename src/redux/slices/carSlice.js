import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars:[],
    carForUpdate: null
}

const getAll = createAsyncThunk(
    'CarSlice/getAll',
    async (thunkAPI)=>{
        try {
           const {data} = await carService.getAll();
            return data
        }catch (e) {
           return  thunkAPI.rejectedWithValue(e.response.data)
        }
    }

)
const createCar = createAsyncThunk(
    'CarSlice/createCar',
    async (car,thunkAPI)=>{
      const {data} = await carService.create(car);
      thunkAPI.dispatch(getAll())
      return data
    }
)

const deleteCar = createAsyncThunk(
    'CarSlice/deleteCar',
    async (id,thunkAPI)=>{
      await carService.delete(id)
        await thunkAPI.dispatch(getAll())
    }
)
const updateCar = createAsyncThunk(
    'CarSlice/updateCar',
    async ({id,car},thunkAPI)=>{
      await carService.update(id,car)
        await thunkAPI.dispatch(getAll())
    }
)

const CarSlice = createSlice({
    name:'CarSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, action)=>{
           state.carForUpdate = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
        })
        .addCase(createCar.fulfilled, (state, action)=>{
        })
        .addCase(deleteCar.fulfilled,(state, action)=>{

        })
        .addCase(updateCar.fulfilled, (state) => {
            state.carForUpdate = null
        })

})
const {reducer:carReducer,actions:{setCarForUpdate}} = CarSlice;

const carActions= {
    getAll,
    createCar,
    deleteCar,
    setCarForUpdate,
    updateCar
}
export {
    carActions,
    carReducer

}