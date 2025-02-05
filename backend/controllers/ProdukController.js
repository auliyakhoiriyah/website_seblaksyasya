const Product = require ("../models/Product");
const cloudinary = require ("../config/cloudinary");

//mendapatkan semua product
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getDetailProduct = async (req, res) => {
    try{
        const { id } = req.params;// Access the dynamic 'id; from the URL

        const product = await Product.findById(id);

        // Frtch the product from the database using mongoose
        if (!product) {
            return res.status(404).json({ message: "Product not found"});

        }

        // Return the found product as a response
        res.json(product);
    }catch (error){
        console.error(error);
        res.status(500).json({ message: "Server error"});
    }
};

// Menambahkan product baru
exports.createProduct = async (req,res) => {
    try{
        // Mengunggah file baru
        const result = await cloudinary.uploader.upload(req.file.path);

        // Membuat product dengan data dari body dan menambahkan thumbnail 
        const product = new Product({
            ...req.body, // Spread operator untuk menambahkan semua data dari body
            thumbnail:result?.secure_url, // Tambahkan URL dari cloudinary
            cloudinaryId:result?.public_id,
        });

        // Menyimpan product ke database
        await product.save();

        res.status(201).json(product);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        // Hapus file dari cloudinary
        await cloudinary.uploader.destroy(product.cloudinaryId);

        // Hapus file dari MongoDB
        await product.deleteOne();

        res.status(200).json({ message: "product deleted successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete Product"});
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // cari product berdasarkan id
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "product not found"});
        }

        // jika ada file yang diunggah, perharui gambar di cloudinary
        console.log('req.file', req.file);
        let result;
        if (req.file) {
            // hapus gambar lama di cloudinary
            await cloudinary.uploader.destroy(product.cloudinaryId);

            // Unggah gambar baru ke cloudinary
            result = await cloudinary.uploader.upload(req.file.path);
        }

        // perbarui data produl
        const updateProduct = {
            ...req.body, // data lain dari request body
            thumbnail: result?.secure_url || product.thumbnail, // Gambar baru / tetap yang lama
            cloudinaryId: result?.public_id|| product.cloudinaryId, // Id gambar baru atau lama
        };

        //simpan perubahan kedatabase
        product = await Product.findByIdAndUpdate(id, updateProduct, { new: true   });

        //kirim respon
        res.status(200).json(product);
    }catch (err){
        res.status(400).json({ message: err.message});
    }
};