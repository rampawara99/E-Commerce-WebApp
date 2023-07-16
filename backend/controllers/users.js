import UsersModel from "../model/usersModel.js"


// It request provides all users data
export const getUsers = async (req, res) => {
    try {
        const result = await UsersModel.find();
        res.send(result);
    } catch (err) {
        // console.log(err);
        res.send({ result: "Something is wrong in server site!" })
    }
}

// Post Request for new user singUp
export const userSignUp = async (req, res) => {
    try {
        const { firstName, email, password } = req.body;
 
        // Validate input fields
        if (!email || !password || !firstName) {
            return res.status(422).json({
                error: 'Please provide all required fields!',
            });
        }
        if (password.length < 6) {
            return res.status(422).json({
                error: 'Password should be at least 6 characters long!',
            });
        }

        // Check if user already exists with the same email
        const userExists = await UsersModel.findOne({ email });
        if (userExists) {
            return res.status(409).json({
                error: 'User already exists with the same email!',
            });
        }

        // Save the new user
        const newUser = new UsersModel(req.body);
        await newUser.save();
        res.status(201).json({
            message: 'User created successfully!',
            user: {
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                user: newUser.user
            },
        });
    } catch (err) { 
        res.status(500).json({
            error: 'Something went wrong in the server!',
        });
    }
};


// Login Request
export const userLogin = async (req, res) => { 
    console.log(req.body)
    try {
        // Get email and password fields from the request body
        const { email, password } = req.body;

        // Check if email and password fields are not empty
        if (!email || !password) {
            // If either field is missing or empty, send an error message in the response
            res.status(400).send({ result: 'Please provide both email and password fields.' });
            return;
        }

        // Find the user with the provided email and password, and exclude the password field from the result
        const user = await UsersModel.findOne({ email, password }).select('-password');

        if (!user) {
            // If no user is found, send an error message in the response
            res.status(404).send({ result: 'User not found. Please check your email and password.', status:404 });
            return;
        }

        // If a user is found, send the user details back in the response
        res.send(user);
    } catch (err) {
        // If there is an error while searching for the user, send an error message in the response
        res.status(500).send({ result: 'Something went wrong in the server while searching for user data.' });
    }
};
