class Supermarket {
  Warung = [
    ["Sampo", 3],
    ["Minuman", 3],
    ["Makanan", 5],
    ["Pepsi", 8],
    ["Obat", 9],
  ];

  checkwarung(namaBarang, jumlahBarang) {
    let counter = 0;
    for (let i = 0; i < this.Warung.length; i++) {
      if (namaBarang === this.Warung[i][0]) {
        if (
          namaBarang === this.Warung[i][0] &&
          jumlahBarang < this.Warung[i][1]
        ) {
          this.Warung[i][1] = this.Warung[i][1] - jumlahBarang;
          return `Barang ${jumlahBarang} yang dibeli sebanyak ${jumlahBarang}. sisa ${namaBarang} sebanyak ${this.Warung[i][1]}`;
        } else if (
          namaBarang === this.Warung[i][0] &&
          this.Warung[i][1] < jumlahBarang
        ) {
          let hasilJumlahBarang = jumlahBarang * 2;
          this.Warung[i][1] += hasilJumlahBarang;
          return `sisa barang ${namaBarang} sebanyak ${this.Warung[i][1]}`;
        }
      } else {
        counter++;
      }
    }
    if (counter === this.Warung.length) {
      return `Barang ${namaBarang} yang anda cari kosong`;
    }
    return result;
  }
}
let wrn = new Supermarket();
console.log(wrn.checkwarung("Mie", 5));
console.log(wrn.checkwarung("Sampo", 5));
console.log(wrn.checkwarung("Pepsi", 7));
