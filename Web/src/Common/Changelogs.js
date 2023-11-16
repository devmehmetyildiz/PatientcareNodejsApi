
const version1_0_0_0 = {
    version: "1.0.0.0",
    bugs: [
        {
            title: "Genel Hata Düzenlemeleri", commits: [
                "Rutinler Dışındaki Akışlar Sisteme Eklendi",
                "Mobil Ekran Düzenlemeleri, Hastalar Dışında düzenleme yapıldı"
            ]
        }
    ],
}

const version1_0_0_1 = {
    version: "1.0.0.1",
    changes: [
        {
            title: "Satın Alma İşlemleri", commits: [
                "Satın Almalarda Teslim alan olarak kurum görevlileri seçilecek",
            ],
        },
        {
            title: "Hasta İşlemleri", commits: [
                "Ön Kayıtlardaki kuruma giriş tarihi, ön kayıt onaylama ekranına taşındı.",
                "Detay Ekranındaki Ürün hareket işlemlerinde ürün - barkod yerine skt çıkacak",
                "Hastalar ekranındaki eylemler seçeneceği detay olarak değişti ve popup yerine düz icon yapıldı",
                "Detay ekranındaki hareket tablosundan aktivasyon bilgisi kaldırıldı.",
                "Ön Kayıtlar tamamlama ekranında kart bilgilerindeki alt bilgiler popup yapıldı.",
                "Tanım düzenlemede müşteri türleri olarak sadece departman olarak sağlık seçilen türler gelecek"
            ],
        }
    ],
    bugs: [
        {
            title: "Ekran Hataları", commits: [
                "Departman Güncelleme ekranında verilerin gelmeme problemi düzeltildi",
                "Hasta Hareketlerinden Kurumda hareketi yanlış yazılmış düzeltildi"
            ],
        },
        {
            title: "Genel Hatalar", commits: [
                "Parola değiştir ekranının açılmama problemi düzeltildi.",
                "Parola Resetleme ekranın açılmama problemi düzeltildi"
            ],
        }
    ],
}

const version1_0_0_2 = {
    version: "1.0.0.2",
    features: [
        {
            title: "Ayarlar", commits: [
                "Periyotlara hızlı oluşturma seçeneği eklendi",
                "Katlara hızlı kat oluşturma seçeneği eklendi",
            ]
        },
        {
            title: "Hastalar", commits: [
                "Hasta Detay Ekranında Kat değiştirme seçeneği eklendi",
                "Hasta Detay Rutin düzenle ekranında şablon oluşturma şablon ekleme seçenekleri eklendi"
            ]
        },
    ],
    changes: [
        {
            title: "Ayarlar", commits: [
                "Kontrol Periyotları kaldırıldı, periyotlar yapılacaklara bağlandı",
                "Hastalar artık yapılacak grup tanımlarına değil direkt yapılacaklara bağlı",
            ],
        },
        {
            title: "System", commits: [
                "Rutin Kontrol cron jobı güncellendi",
            ],
        },
        {
            title: "Hastalar", commits: [
                "Hasta detay ekranında görsel düzenleme",
                "Detay ekranındaki yapılacak tabloları onaydan tamamlandıya çekildi"
            ],
        },
    ],
    bugs: [
        {
            title: "Hastalar", commits: [
                "Movement tablolarında sktler sadece tarihli gözüküyor",
                "ilac ekleme ilaç silme tablolarında sktler sadece tarihli gözüküyor",
            ],
        },
        {
            title: "Genel", commits: [
                "multiple dropdown kullanan crud sayfalarda silinmiş ürünlerin yol açtığı hata giderildi",
            ],
        },
    ],
}


export { version1_0_0_0, version1_0_0_1, version1_0_0_2 }

/* const version1000 = {
    version: "1.0.0.0",
    features: [
        {
            title: "testtitle", commits: [
                "test1",
                "test2"
            ]
        },
        {
            title: "testtitle1", commits: [
                "test1",
                "test2"
            ]
        },
        {
            title: "testtitle2", commits: [
                "test1",
                "test2"
            ]
        },
    ],
    changes: [
        {
            title: "testtitle", commits: [
                "test1",
                "test2"
            ]
        }
    ],
    bugs: [
        {
            title: "testtitle", commits: [
                "test1",
                "test2"
            ]
        }
    ],
    withoutIssues: [
        {
            title: "testtitle", commits: [
                "test1",
                "test2"
            ]
        }
    ]
} */
