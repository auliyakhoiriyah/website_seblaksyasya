const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Import model User

const signUp = async (req, res) => {
    const { name, password, repeatPassword, email, nomor_telepon, alamat } = req.body;

    // Validasi input
    if (!name || !password || !repeatPassword || !email || !nomor_telepon || !alamat) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    // Cek apakah password dan repeatPassword cocok
    if (password !== repeatPassword) {
        return res.status(400).json({ message: "Passwords do not match!" });
    }

    try {
        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered!" });
        }

        // Hash password sebelum menyimpan ke database
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user ke database tanpa menyimpan repeatPassword
        const newUser = new User({ 
            name, 
            password, 
            email, 
            nomor_telepon, 
            alamat 
        });

        await newUser.save();

        res.status(201).json({ message: "User successfully registered!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { signUp };
