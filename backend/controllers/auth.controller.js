 export const signup = async (req,res) => {
    res.json({
        data: "You have hit the signup Endpoint",
    })
}

export const login = async (req,res) => {
    res.json({
        data: 'You have hit the login endpoint',
    })
}

export const logout = async (req,res) => {
    res.json({
        data: 'You have hit the logout endpoint',
    })
}