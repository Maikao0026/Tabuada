function calcular() 
{
  let multiplicando = document.getElementById("multiplicando").value
  let multiplicador = document.getElementById('multiplicador').value 
  const select = document.getElementById('select')

  select.size = Number(multiplicando)+1
  select.innerText = ''

  for (let i = 0; i <= multiplicando; i++) {
    let item = document.createElement('option')
    item.value= 'v' + i
    item.text = `${multiplicador} * ${i} = ${multiplicador * i}`
    select.appendChild(item)
  }
}

function limpar()
{
  document.getElementById("multiplicando").value =''
  document.getElementById("multiplicador").value = ''
  document.getElementById("select").innerText = ''
}