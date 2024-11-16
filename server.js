//mengimpor modul yang diperlukan
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//membuat instance aplikasi express
const app = express();
//mengatur port server
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//mengambil URL koneksi mangodb
const uri = process.env.MONGODB_URI;
//menghubungkan ke database mangodbmenggunakan mangoose
mongoose.connect(uri,{ useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => console.log('Terhubung ke MongoDB'))
    .catch((err) => console.error('Gagal terhubung ke MongoDB:', err));


//Mendefinisikan route untuk endpoint /. Ketika ada request GET ke /, server akan merespons dengan "Haloo berhasil ya kamu".
app.get('/',(req,res) => {
    res.send('Haloo berhasil ya kamu');
})

//Menjalankan server dan mendengarkan request pada port yang ditentukan. Template literal digunakan untuk menampilkan pesan yang lebih informatif.
app.listen(port, () => {
    console.log('server berjalan diport ${port}');
})