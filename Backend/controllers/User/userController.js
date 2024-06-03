import User from '../../models/user.js';

export const checkUser = async (req, res) => {
    try {
        const {name} = req.query
        console.log(name)
        
        const existingName = await User.findOne({name})

        console.log(existingName)

        if (existingName) {
            return res.json({ status: false });
        }

        res.json({
            status: true
        })
    } catch (error) {
        
    }

    
}