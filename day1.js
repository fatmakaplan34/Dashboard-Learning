// Gerçek Veriler ile Çalışma 

// Beton verileri - Obje array kullanarak yapıyoruz.

const betonVerileri = [
    {tarih: "10.02.2025", miktar: 38, santiye: "Prefabrik", sinif: "C35"},
    {tarih: "11.02.2025", miktar: 27, santiye: "Prefabrik", sinif:"C35"},
    {tarih: "12.02.2025", miktar: 38, santiye: "Prefabrik", sinif: "C35"},
    {tarih: "13.02.2025", miktar: 22, santiye: "Prefabrik", sinif:"C35"},
    {tarih: "14.02.2025", miktar: 39, santiye: "Prefabrik", sinif:"C35"},    
];

console.log("***DETAYLI BETON RAPORU***\n");

//1. Her bir günü görmek için
console.log("Günlük Detay:");
for(let veri of betonVerileri) {
    console.log(`${veri.tarih}: ${veri.miktar} M³ (${veri.sinif})`);
}

//2. Toplam hesaplama
let toplam = 0;
for (let veri of betonVerileri) {
    toplam += veri.miktar;
}
console.log(`\nToplam: ${toplam} M³`)

//3. Ortalama hesaplama
const ortalama = toplam / betonVerileri.length;
console.log(`Ortalama: ${ortalama.toFixed(2)} M³`);

//4. EN yüksek ve en düşük gün
let enYuksek = betonVerileri[0];
let enDusuk = betonVerileri[0];

for (let veri of betonVerileri) {
    if (veri.miktar > enYuksek.miktar) enYuksek = veri;
    if (veri.miktar < enDusuk.miktar) enDusuk = veri;
}

console.log(`\nEn Yüksek: ${enYuksek.tarih} - ${enYuksek.miktar} M³`);
console.log(`En Düşük: ${enDusuk.tarih} - ${enDusuk.miktar} M³`);

//5. Fonksiyon ile filtreleme - 30 M³'ten fazla günler
const yuksekGunler = betonVerileri.filter(v => v.miktar > 30);
console.log(`\n30 M³'ten fazla günler: ${yuksekGunler.length} gün`);
for (let gun of yuksekGunler) {
    console.log( ` - ${gun.tarih}: ${gun.miktar} M³`);
}