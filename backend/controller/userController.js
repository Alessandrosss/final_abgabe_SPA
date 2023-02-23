import User from '../model/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const getUsers = async (
  _req,
  res
) => {
  const users = await User.find()
  return res
    .status(200)
    .json({
      success: true,
      data: users,
    })
}

export const register = async (
  req,
  res
) => {
  const {
    name,
    email,
    password,
    repeatPassword,
  } = req.body
  console.log(req.body)

  try {
    if (name === '')
      throw {
        success: false,
        error: {
          name: 'Name input could not be unfilled',
        },
      }
    if (email === '')
      throw {
        success: false,
        error: {
          email:
            'Email input could not be unfilled!',
        },
      }
    if (password === '')
      throw {
        success: false,
        error: {
          password:
            'Password input could not be unfilled!',
        },
      }
    if (repeatPassword === '')
      throw {
        success: false,
        error: {
          repeatPassword:
            'Repeat Password input could not be unfilled!',
        },
      }
    if (password !== repeatPassword)
      throw {
        success: false,
        error: {
          isMatch:
            "Passwords don't metch together!",
        },
      }
    const salt = await bcrypt.genSalt()
    const hashedPassword =
      await bcrypt.hash(password, salt)

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    }).save()

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET
    )

    return res
      .status(201)
      .json({
        success: true,
        data: { newUser, token },
      })
  } catch (error) {
    res.status(422).json(error)
  }
}

export const login = async (
  req,
  res
) => {
  const { email, password } = req.body

  try {
    if (email === '')
      throw {
        success: false,
        error: {
          email:
            'Email input could not be unfilled!',
        },
      }
    if (password === '')
      throw {
        success: false,
        error: {
          password:
            'Password input could not be unfilled!',
        },
      }
    const user = await User.findOne({
      email,
    })

    if (!user)
      throw {
        success: false,
        error: {
          user: "User doesn't exists with this credentials!",
        },
      }

    const isMatch = bcrypt.compare(
      password,
      user.password
    )

    if (!isMatch)
      throw {
        success: false,
        error: {
          password: 'Invalid Password',
        },
      }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    )

    return res
      .status(201)
      .json({
        success: true,
        data: { user, token },
      })
  } catch (error) {
    res.status(422).json(error)
  }
}
