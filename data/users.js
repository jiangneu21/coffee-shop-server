import bcrypt from 'bcryptjs';
const users = [
    {name: 'aaa', email:'aaa@gmail.com', password: bcrypt.hashSync('123456', 10), isAdmin: 'true'},
    {name: 'bbb', email:'bbb@gmail.com', password: bcrypt.hashSync('123456', 10)}
];
export default users;