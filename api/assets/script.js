let country = document.getElementById(`country`);
let code = document.getElementById(`code`);

let totalcases = document.getElementById(`totalcases`);
let deaths = document.getElementById(`deaths`);
let recovered = document.getElementById(`recovered`);

fetch(`https://api.covid19api.com/summary`)
  .then((data) => {
    return data.json();
  })
  .then((img) => {
    console.log(img.Countries);
    for (let i = 0; i < img.Countries.length; i++) {
      let countrytext = document.createElement(`div`);
      countrytext.className = `column`;
      countrytext.style.border = `1px solid black`;
      countrytext.innerText = `${img.Countries[i].Country}`;
      country.appendChild(countrytext);

      let codetext = document.createElement(`div`);
      codetext.className = `column`;
      codetext.style.border = `1px solid black`;
      codetext.innerText = `${img.Countries[i].CountryCode}`;
      code.appendChild(codetext);

      let totalcasetext = document.createElement(`div`);
      totalcasetext.className = `column`;
      totalcasetext.style.border = `1px solid black`;
      totalcasetext.innerText = `${img.Countries[i].TotalConfirmed}`;
      totalcases.appendChild(totalcasetext);

      let deatstext = document.createElement(`div`);
      deatstext.className = `column`;
      deatstext.style.border = `1px solid black`;
      deatstext.innerText = `${img.Countries[i].TotalDeaths}`;
      deaths.appendChild(deatstext);

      let recovertext = document.createElement(`div`);
      recovertext.className = `column`;
      recovertext.style.border = `1px solid black`;
      recovertext.innerText = `${img.Countries[i].TotalRecovered}`;
      recovered.appendChild(recovertext);
    }
  })
  .catch((error) => {
    console.log(error);
  });
