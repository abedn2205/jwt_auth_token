import Products from "../models/ProductModels.js";

//read all data
export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
      res.json({message: error.message})
  }
};

// read data by id
export const getProductsById = async (req, res) => {
    try {
      const products = await Products.findAll({
          where:{
              id: req.params.id
          }
      });
      res.json(products[0]);
    } catch (error) {
        res.json({message: error.message})
    }
  };

// create data products
export const createProduct = async (req, res)=>{
    try {
        await Products.create(req.body, {
            where:{
                id:req.params.id
            }
        })
        res.json({"message": "Product Created"})
    } catch (error) {
        res.json({message: error.message})
    }
}

// update data product
export const updateProduct = async (req, res)=>{
    try {
        await Products.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.json({"message": "Product updated"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteProduct = async (req, res)=>{
    try {
        await Products.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({"message": "Product Deleted"})
    } catch (error) {
        res.json({message: error.message})
    }
}

