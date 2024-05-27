export default function initFetchBitcoin() {}

async function fetchBitcoin() {
  try {
    const dados = await fetch("https://blockchain.info/ticker");
    const dadosJSON = await dados.json();
    const btcPreco = document.querySelector(".btc-preco");

    btcPreco.innerText = (1000 / dadosJSON.BRL.sell).toFixed(4);
  } catch (erro) {
    console.log(Error(erro));
  }
}
fetchBitcoin();
