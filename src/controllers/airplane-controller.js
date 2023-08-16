const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse} = require('../utils/common');
// const  AppError = require('../utils/errors/app-error');

//const { response } = require('express');

// how a createAirplane api loook like ;
/*
   POST : /airplanes
   req-body {modelNumber : 'airbus 320', capacity:  200}
   
*/
async function createAirplane(req, res){
   try {
     const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
     });
     SuccessResponse.data = airplane;
      return res
              .status(StatusCodes.CREATED)
              .json(SuccessResponse);
   } catch (error) {
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse);
   }
}

async function getAirplanes(req, res){
   try {
      const airplanes = await AirplaneService.getAirplanes();
      
     SuccessResponse.data = airplanes;
     return res
             .status(StatusCodes.OK)
             .json(SuccessResponse);
   } catch (error) {
      
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse);
   }
}
/*
   GET : /airplanes/:id
   req-body {modelNumber : 'airbus 320', capacity:  200}
   
*/
async function getAirplane(req, res){
   try {
      const airplanes = await AirplaneService.getAirplane(req.params.id);
      SuccessResponse.data = airplanes;
   //   console.log(airplanes);
      return res
             .status(StatusCodes.OK)
             .json(SuccessResponse);
   } catch (error) {
      // console.log(error);
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse);
   }
}
/*
   DELETE : /airplanes/:id
   req-body {}
   
*/
async function destroyAirplane(req, res){
   try {
      const airplanes = await AirplaneService.destroyAirplane(req.params.id);
      
     SuccessResponse.data = airplanes;
     return res
             .status(StatusCodes.OK)
             .json(SuccessResponse);
   } catch (error) {
      
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse);
   }
}
async function updateAirplane(req, res){
   try {
      const airplanes = await AirplaneService.updateAirplane({
         capacity : req.body.capacity
      }, req.params.id);
      
     SuccessResponse.data = airplanes;
     return res
             .status(StatusCodes.OK)
             .json(SuccessResponse);
   } catch (error) {
      
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse);
   }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}