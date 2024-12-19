import {v2 as cloudinary} from 'cloudinary';





//function for add product
const addProduct = async (req,res,)=>{
  try {
    const {name, description, price, category, subcategory, sizes, bestseller}=req.body

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images = [image1,image2,image3,image4].filter((item)=>item !== undefined)

    let imagesUrl=await Promise.all(
        images.map(async(item)=>{
            let result = await cloudinary.uploader(item.path,{resource_type:"image"});
            return result.secure_url
        })
    )
  const productData = {
    name,
    description,
    category,
    price:Number(price),
    subcategory,
    bestseller:bestseller === "true" ? true:false,
    sizes:JSON.parse(sizes),
    image:imagesUrl,
    date:Date.now()
  }

  console.log(productData);

const product =new productModel(productData);
await product.save()

res.json({success:true,message:"Product Added"})

    res.json({})                
    
  } catch (error) {
    res.json({success:false,message:error.message})
  }
}


//function for list product
const listProducts = async (req,res,)=>{
    
}

//function for remove product
const removeProduct = async (req,res,)=>{
    
}



//function for single product Info
const singleProduct = async (req,res,)=>{
    
}


export {listProducts, addProduct,removeProduct,singleProduct}