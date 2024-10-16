
function display(result) {
  let days=result.forecast.forecastday;
   let cartona=``
  for (let i = 0; i < days.length; i++) {
   let date=new Date(days[i].date);
   let thedate=date.toLocaleDateString('en-us',{weekday:'long'});

cartona+=` <div class="cardContainer">
      <div class="card">
      <p class="city" >${theinput.value}</p>
<div class="thecalendar gap-5 d-flex  text-white">
  <p class="day ">${thedate}</p>
  <p class="date">${date.getDay()}/ ${date.getMonth()}</p>
</div>
        <p class="weather">${days[i].day.condition.text}</p>
        <svg
          class="weather"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          xml:space="preserve"
        >
          <image
            id="image0"
            width="100"
            height="100"
            x="0"
            y="0"
href="${days[i].day.condition.icon}"
            ></image>
        </svg>
        <p class="temp">${days[i].day.maxtemp_c}</p>
        <div class="minmaxContainer">
          <div class="min">
            <p class="minHeading">Min</p>
            <p class="minTemp">30°</p>
          </div>
          <div class="max">
            <p class="maxHeading">Max</p>
            <p class="maxTemp">${days[i].day.maxtemp_c}</p>
          </div>
        </div>
      </div>
    </div>
    
    
    `    
    document.getElementById("rowdata").innerHTML=cartona;
  }
}


async function getcity(city) {
 var response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0eab017b39bd448585c172255241210&q=${city}&days=3&aqi=no&alerts=no`)
var finalresult=await response.json()

display(finalresult)
}
getcity("alex")

let theinput=document.getElementById("theinput")

theinput.addEventListener('input',function() {
 getcity(theinput.value)
})
