const Midtrans = require("midtrans-client");
const Transaction = require ("../models/Transaction");
const midtransClient = require("midtrans-client");

// Menambahkan product baru
exports.createTransaction = async (req, res) => {
    try {
        const { first_name, amount, product_id} = req.body;
        //create snap API instance
        let snap = new midtransClient.Snap({
            // Set to true if you want Product Environment ( accept real transaction)
            isProduction: false,
            serverKey: process.env.MIDTRANS_SERVERKEY,
        });

        const order_id = "ORDER-" + new Date().getTime // Order ID unik
        // Parameter transaksi
        const parameter = {
            transaction_details: {
                order_id: order_id,
                gross_amout: amount,
            },
            credit_card: {
                secure: true,
            },
            customer_details: {
                first_name: first_name,
            },
        };


        // Tunggu transaksi selesai
        const transaction = await 
        snap.createTransaction(parameter);

        // Ambil redirect URL dari midtrans
        const transactionUrl = transaction.redirect_url;

        // Simpan redirect URL dari midtrans
        const newTransaction = new Transaction({
            ...req.body,// Data transaksi lainnya
            Midtrans_url: transactionUrl, // URL pembayaran dari midtrand
            transaction_id: order_id,
        });

        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};