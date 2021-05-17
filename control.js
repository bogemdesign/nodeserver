'use strict'

var respon = require("./res");
var connection = require("./conect");


exports.index = function (req , res) {
  respon.ok("Aplikasi  Rest Api Telah berjalan", res)
};


// menampilkan semua data yang ada di dbcoffeshop
exports.tampilkansemuadata = function (req ,res) {
  connection.query('SELECT * FROM coffe', function(err, rows, fileds) {
    if (err) {
      console.log(err);
    }
    respon.ok(rows, res)

  });

};


// menampilkan data berdasarkan id di db
exports.tampilkandataid = function(req, res) {
  let id = req.params.id
  connection.query('SELECT * FROM coffe WHERE id =?',
    [id],
    function(err, rows, fileds) {
      if (err) {
        console.log(err);
      }
      respon.ok(rows, res)

    });
};



// menambahkan data coffe 
exports.tambahData = function(req,res){
  let nama = req.body.nama
  let harga = req.body.harga
  let gambar = req.body.gambar
  let suka = req.body.suka
  
  connection.query('INSERT INTO coffe (nama,harga,gambar,suka) VALUES(?,?,?,?) ',[nama,harga,gambar,suka],
   function(err, rows, fileds) {
      if (err) {
        console.log(err);
      }
      respon.ok("Data Berhasil Di tambahkan", res)
    });
};

// mengubah data 
exports.ubahData = function(req,res){
  let id = req.body.id
  let nama = req.body.nama
  let harga = req.body.harga
  let gambar = req.body.gambar
  let suka = req.body.suka
  
  connection.query('UPDATE coffe SET nama=? , harga=?, gambar=?, suka=? WHERE id=?',[nama,harga,gambar,suka,id],
    function(err, rows, fileds) {
      if (err) {
        console.log(err);
      }
      respon.ok("Data Berhasil Di Rubah", res)
    });
};

// menghapus data
exports.hapusData =function(req,res){
   let id = req.body.id
  connection.query('DELETE FROM coffe WHERE id=? ',[id],
      function(err, rows, fileds) {
      if (err) {
        console.log(err);
      }
      respon.ok("Data Berhasil Di hapus", res)
    });
  
  
}

