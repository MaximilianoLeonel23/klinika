const {Patient} = require('../../database/models')
const bcrypt = require('bcrypt')


const loginPatient = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if(!email || !password)
      {
        throw new Error('All fields are required')
      }
  
      const patient = await Patient.findOne({
        where: {
          email: email
        }
      });
      
      if (!patient) {
        throw new Error('Patient not found')
      }
  
      const isPasswordValid = await bcrypt.compare(password, patient.password)
  
      if (!isPasswordValid) {
        throw new Error('Invalid password')
      }

      return res.status(201).json({ message: 'Patient logged', patient })
  
    } catch (error) {

      return res.status(400).json({ error: 'Login Patient', message:error.message })
    }
  }

  module.exports = {loginPatient}