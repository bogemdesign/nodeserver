'use strict'

module.exports = function (app) {
  var jsonku = require("./control");
  
  app.route('/')
    .get(jsonku.index);
  
  app.route('/tampil')
    .get(jsonku.tampilkansemuadata);
    
  app.route('/tampil/:id')
    .get(jsonku.tampilkandataid);
    
  app.route('/tambah')
    .post(jsonku.tambahData);
    
  app.route('/ubah')
    .put(jsonku.ubahData);
    
  app.route('/hapus')
    .delete(jsonku.hapusData);
    
    
    
}