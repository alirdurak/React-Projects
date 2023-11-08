import React, { useState } from "react";

const products = [
  {
    UrunAdi: "Urun 1",
    ID: 1,
    Fiyat: 12.99,
    Description: "Lorem ipsum dolor sit amet.",
  },
  {
    UrunAdi: "Urun 2",
    ID: 2,
    Fiyat: 12.99,
    Description: "Lorem ipsum dolor sit amet.",
  },
  {
    UrunAdi: "Urun 3",
    ID: 3,
    Fiyat: 12.99,
    Description: "Lorem ipsum dolor sit amet.",
  },
  {
    UrunAdi: "Urun 4",
    ID: 4,
    Fiyat: 12.99,
    Description: "Lorem ipsum dolor sit amet.",
  },
];

function ProductList() {
  const [detail, setDetail] = useState();
  return (
    <div className="container">
      <h2>Urunler</h2>
      {products.map((i) => {
        return (
          <div key={i.ID}>
            <span>{i.UrunAdi}</span>
            <br />
            <span>{i.Fiyat}</span>
            <br />
            <button onClick={() => setDetail(i)}>Detaylar</button>
          </div>
        );
      })}
      {detail && (
        <div>
          <h2>Urun Detayi</h2>
          <span>{detail.UrunAdi}</span>
          <br />
          <span>{detail.Fiyat}</span>
          <br />
          <span>{detail.Description}</span>
          <br />
          <button onClick={() => setDetail()}>Kapat</button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
