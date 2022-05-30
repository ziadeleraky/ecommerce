const userModel = require("../database/models/users.model");
const catagoryModel=require("../database/models/category.model");

  class User{
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            await user.save()
            sendEmail(user.email)
            res.status(200).send({
                apiStatus:true,
                data: user,
                message:"user added successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data: e.message,
                message:"user adding problem"
            })

        }
    }
    static addToChart = async (req, res) => {
        try {
           const catagory = catagoryModel(req.body);
           await catagory.save();
           res.status(200).send({
              apiStatus: true,
              data: catagory,
              message: "Added To Chart ",
           });
           await catagory.save();
        } catch (e) {
           res.status(500).send({
              apiStatus: false,
              data: e.message,
              message: "Failed To Added",
           });
        }
     };
}
 module.exports = User