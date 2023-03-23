//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.

	https://apis.ergineer.com/ipgeoapi/159.146.66.41
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

function ipAdresim(data) {
  const newClass = document.createElement("div");
  newClass.classList.add("card");

  const newImg = document.createElement("img");
  newImg.src =
    "https://avatars.mds.yandex.net/i?id=98d9ae2ab1872a22c90c6f7df1201b82_l-5175093-images-thumbs&ref=rim&n=13&w=852&h=480";
  newClass.appendChild(newImg);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  newClass.appendChild(cardInfo);

  const h3 = document.createElement("h3");
  h3.classList.add("ip");
  h3.textContent = data.sorgu;
  cardInfo.appendChild(h3);

  const para1 = document.createElement("p");
  para1.classList.add("ulke");
  para1.textContent = `${data.ülke} (${data.ülkeKodu})`;
  cardInfo.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;
  cardInfo.appendChild(para2);

  const para3 = document.createElement("p");
  para3.textContent = `Şehir: ${data.şehir}`;
  cardInfo.appendChild(para3);

  const para4 = document.createElement("p");
  para4.textContent = `Saat dilimi: ${data.saatDilimi}`;
  cardInfo.appendChild(para4);

  const para5 = document.createElement("p");
  para5.textContent = `Para birimi: ${data.paraBirimi}`;
  cardInfo.appendChild(para5);

  const para6 = document.createElement("p");
  para6.textContent = `ISP: ${data.isp}`;
  cardInfo.appendChild(para6);

  return newClass;
}
const cardsDiv = document.querySelector(".cards");

ipAdresimiAl().then(() => {
  var url = "https://apis.ergineer.com/ipgeoapi/" + benimIP;
  axios
    .get(url)
    .then((response) => {
      console.log("basarili");
      const ulkeDinamik = response.data;
      const card = ipAdresim(ulkeDinamik);
      const cardsElement = document.querySelector(".cards");
      cardsElement.appendChild(card);
    })
    .catch((error) => {
      console.log("başarısız", error);
    });
});
/*
axios
  .get("https://apis.ergineer.com/ipgeoapi/159.146.66.41")
  .then((response) => {
    cardsDiv.appendChild(ipAdresim(response.data));
    console.log(response);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
*/
/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
