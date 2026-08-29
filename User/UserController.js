import User from "./userModule.js";

export const getUsers = async () => {
    try{
    const users = await User.find();
    const usersConverted = users.map(user => user.toJSON());
    console.log(usersConverted);
    return usersConverted;
    }catch(error){
        console.log(error);
    }
}

export const createUser = async (user) => {
    return await User.create(user);
}

export const getUser = async (name) => {
    const users= await User.findOne({ name: name });
    const usersConverted = users.map(user => user.toJSON());
    return usersConverted;
}