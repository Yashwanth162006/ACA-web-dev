const User = require('../Models/userModel')
exports.getAllUsers = async(req,res)=>{
    try{
        const allUsers = await User.find()
        res.status(200).json({
            status: 'success',
            data:{
                users: allUsers
            }
        })
    }
    catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}
exports.getUserById = (req,res)=>{
    try{
        res.status(200).json({
            status: 'success',
            data: {
                user: 'user'
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}
exports.createUser = (req,res)=>{
    try{
        res.status(200).json({
            status: 'success',
            data: {
                user: 'new user'
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}
exports.updateUser = async (req,res)=>{
    try{
        let user = User.findById(req.user._id)
        user = await User.findByIdAndUpdate(req.user._id,req.body,{
            new: true,
            runValidators:[req.body.email]?true:false
        })
        res.status(200).json({
            status: 'success',
            message: 'User data updated'
        })
    }catch(err){
        console.log(err)
        if(err.name === 'ValidationError'){
            const errors = {}
            for(const field in err.errors){
                errors[field] = err.errors[field].message
            }
            const {email} = errors
            if(email){
                res.status(404).json({
                    status: 'fail',
                    message: 'Not a valid email format'
                })
            }
        }
        res.status(404).json({
            status: 'fail',
            message: 'update failed try again'
        })
    }
}

exports.deleteUser = async (req,res)=>{
    try{
        const user = await User.findOne(req.user._id).select('+password')
        const correct = user.verifyPassword(req.body.currentPassword,user.password)
        if(!correct){
            return res.status(401).json({
                status: 'fail',
                message: 'Invalid password'
            })
        }
        await User.findByIdAndDelete(user._id)
        res.status(400).json({
            status: 'success',
            message: 'user deleted successfully'
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}