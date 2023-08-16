const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const { AppError } = require('../utils/errors/app-error');

class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        
         const response = this.model.create(data);
         return response;
    }
    async destroy(data){
        
         const response = this.model.destroy({
            where: {
              id: data
            }
         });
         if(!response){
          throw new AppError('Not able to find the Airplane', StatusCodes.NOT_FOUND);

         }
         return response;
        
    }
    async get(data){
         const response = this.model.findByPk(data);
     //     console.log(response);
         if(!response){
          throw new AppError('Not able to find the Airplane', StatusCodes.NOT_FOUND);
         }
         return response;
        
    }
    async getAll(){
    
         const response = this.model.findAll();
         return response;
        
    }
    async update(id, data){ // data is an object : {col: value, ...}
        
         const response = this.model.update(data, {
            where: {
                id : id
            }
         });
         return response;
        
    }

}

module.exports = CrudRepository;