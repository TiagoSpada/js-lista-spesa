
const ProdottiSpesa = ['Pizza', 'Acqua', 'Sale', 'Gelato', 'Mele', 'Biscotti'];
const ulSpesa = document.getElementById('lista-spesa');
let i = 0;
while(i < ProdottiSpesa.length){
    // creo un elemento li
    const liSpesa = document.createElement('li');
    // scrivo nell'elemto li un prodotto
    liSpesa.innerText = ProdottiSpesa[i];
    liSpesa.classList.add('prodotti-lista')
    // lo aggiungo al ul nell'html
    ulSpesa.append(liSpesa);
    i++;
}