// }, { timestamps: true });


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Hanya bisa 'user' atau 'admin'
    default: "user", // Jika tidak dikirim, otomatis jadi 'user'
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  nomor_telepon: 
  { type: String,
     required: [true] 
    },
  alamat: {
     type: String,
      required: [true] 
    },
}, { timestamps: true });

// Periksa apakah model sudah ada sebelum mendefinisikan ulang
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
// module.exports = mongoose.model('User', userSchema);
