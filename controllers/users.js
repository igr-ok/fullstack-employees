const { prisma } = require('../prisma/prisma-client');
const brypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
       return res.status(400).json({message: 'Please fill required fields!!'});
    }    


const user = await prisma.user.findFirst({
    where: {
        email: email
    }
});

const isPasswordCorrect = user && (await brypt.compare(password, user.password));

if(user && isPasswordCorrect){
    res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name
    })
} else {
    return res.status(401).json({message: 'Wrong login or password'})
}

}

const register = async (req, res) => {
    const {email, password, name} = req.body;
    if(!email || !password || !name){
        return res.status(400).json({message: 'Please fill required fields!!'});
     }
     
     const registeredUser = await prisma.user.findFirst({
        where: {
            email: email
        }
     });

     if(registeredUser){
        return res.status(400).json({message: 'User with the same email already exist'});
     }

     const salt = await brypt.genSalt(10);
     const hashedPassword = await brypt.hash(password, salt);

     const user = await prisma.user.create({
        data: {
            email: email,
            name: name,
            password: hashedPassword
        }
     });

     const secret = process.env.JWT_SECRET;

     if(user && secret){
        res.status(201).json({
            id: user.id,
            email: user.email,
            name: name,
            token: jwt.sign({id: user.id}, secret, {expiresIn: '30d'})
        })
     } else {
        return res.status(400).json({ message: 'Can`t make a user'});
     }
}

const current = async (req, res) => {
    res.send('current');
}

module.exports = {
    login: login,
    register: register,
    current: current
}