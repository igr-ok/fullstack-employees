const { prisma } = require('../prisma/prisma-client');

//route get /api/employees
//desc получаем сотрудников
//access private 

const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();

        res.status(200).json(employees);
        
    } catch (error) {
        res.status(500).json({ message: 'Problem with employees fetch'});
        
    }
}

const add = async (req, res) => {
    try {
        const data = req.body;

        if(!data.firstName || !data.lastName || !data.address || !data.age){
            return res.status(400).json({message: "All fields are required!"})
        }

        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id
            }
        });

        return res.status(201).json(employee)
        
    } catch (error) {
        res.status(500).json({ message: 'Problem with employees fetch'});
    }

}

const remove = async (req, res) => {
    const {id} = req.body;
    try {
        await prisma.employee.delete({
            where: {
                id: id
            }
        });
        res.status(204).json('ok');
    } catch (error) {
        res.status(500).json({ message: 'Problem with employee delete'});
    }

}

const edit = async (req, res) => {
    try {
        const newData = req.body;

        await prisma.employee.update({
            where: {
                id: newData.id                
            },
            data: {
                ...newData
            }
        });
        res.status(204).json('ok');
        
    } catch (error) {
        res.status(500).json({ message: 'Problem with employee update'});
    }
}

const employee = async (req, res) => {
    const {id} = req.params;

    try {
        const employee = await prisma.employee.findUnique({
            where: {
                id
            }
        })
        res.status(200).json(employee);
        
    } catch (error) {
        res.status(500).json({ message: 'Problem with employee fetch'});
    }

}

module.exports = {
    all,
    add,
    remove,
    edit,
    employee
};