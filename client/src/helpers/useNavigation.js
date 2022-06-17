const myFunction = (id) => {
    let x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme-d1";
    } else { 
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

const openNav = () => {
    let x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }