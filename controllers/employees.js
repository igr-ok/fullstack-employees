const { prisma } = require('../prisma/prisma-client');

//route get /api/employees
//desc получаем сотрудников
//access private 

const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();

        res.status(200).json(employees);
        
    } catch (error) {
        res.status(400).json({ message: 'Problem with employees fetch'});
        
    }
}

module.exports = {
    all
};