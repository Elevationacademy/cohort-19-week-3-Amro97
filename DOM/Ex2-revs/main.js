const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

  const checkReservation = function (){
    let name = document.getElementById('ipt').value;
    let body = document.getElementsByTagName('body')[0]
    if (name in reservations){
        if(!reservations[name].claimed){
    let newadd = document.createElement('h2')
    newadd.innerText = 'Welcome '+name
    body.appendChild(newadd)
}
      else{
        let newadd = document.createElement('h2')
        newadd.innerText = 'were sorry calimed already '+name
        body.appendChild(newadd)}
  }
  else {
    let newadd = document.createElement('h2')
    newadd.innerText = 'were sorry, no res '+name
    body.appendChild(newadd)
  }
  }
  document.getElementById('btn').onclick = checkReservation
