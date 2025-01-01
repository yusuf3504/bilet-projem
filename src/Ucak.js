import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import './Ucak.css'


export default function Ucak() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('');

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    // Arama işlemi burada yapılacak
    console.log('Arama yapılıyor:', { from, to, departureDate, returnDate });
  };
  return (
    <div className='ucak'>
      <div className="search-form">
        <div className="form-group">
          <label htmlFor="from">Nereden</label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Şehir veya Havaalanı"
          />
        </div>
        <button className="swap-button" onClick={handleSwap}>
          <FontAwesomeIcon icon={faExchangeAlt} />
        </button>
        <div className="form-group">
          <label htmlFor="to">Nereye</label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Şehir veya Havaalanı"
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Gidiş Tarihi</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Dönüş Tarihi</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>Ara</button>
      </div>
      <h2 className='başlık'>Türkiye'nin Önde Gelen Uçak Bileti Sitesi</h2>
      <div class="kart">
        <ul class="h-list">
          <div className="box">
            <img className='box-1' src="https://www.egan.com.tr/Uploads/Files//cagrimerkeziresim.png"></img>
            <h3 className='başlık'>
              7/24 Müşteri Hizmetleri
            </h3>
            <p className='paragraf'>
              biletdükkanı.com ve bilet dükkanı mobil uygulamaları üzerinden yapacağınız tüm işlemlerde müşteri hizmetleri ekibimiz 7/24 yanınızda. Bir tıkla destek ekibimize bağlanabilirsiniz.
            </p>
          </div>
          <div className="box">
            <img className='box-2' src="https://www.mevlidhediyesi.com/files/cap/images/guvenli-odeme.png"  ></img>
            <h3 className='başlık'>Güvenli Ödeme</h3>
            <p className='paragraf'>
              Tüm otobüs bilet alım işlemlerinizi ister evinizden, ister ofisinizden ya da dilerseniz cep telefonunuzdan kolay, hızlı ve güvenilir bir şekilde gerçekleştirebilirsiniz.
            </p>
          </div>
          <div className="box">
            <img className='box-3' src="https://yesilpvc.com/wp-content/uploads/2022/04/butce-dostu.png"></img>
            <h3 className='başlık'>Bütçe Dostu</h3>
            <p className='paragraf'>
              bilet dükkanı size tüm firmaların otobüs biletlerini sorgulama ve karşılaştırma imkanı sunar. Bu sayede bütçenize uygun otobüs biletini rahatlıkla bulabilir ve satın alabilirsiniz.
            </p>
          </div>
          <div className="box">
            <img className='box-4' src="https://www.webtekno.com/images/editor/default/0003/50/41256cafff30059b92d451f18c049f1d637a9a89.jpeg"></img>
            <h3 className='başlık'>Seçkin Firmalar</h3>
            <p className='paragraf'>
              bilet dükkanı olarak seçkin  firmaları sizler için bir araya getirdik. Firmaların biletlerini bilet dükkanı'nda karşılaştırabilir, uygun  biletinizi bulabilir ve çevrimiçi bir şekilde satın alabilirsiniz.
            </p>
          </div>
        </ul>
      </div>
    </div>


  )
}
