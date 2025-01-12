import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    
    if(token){
        
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.userId = decoded.id;
            
            next()
        } catch (e) {
            console.log(e)
            return res.status(403).json({
                message: 'Не удалось получить токен'
            })
        }
    } else{
        return res.status(403).json({
            message: 'Нет доступа'
        })
    }
}