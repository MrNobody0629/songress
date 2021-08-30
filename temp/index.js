var imgarr = ["img1.png","img2.jpeg"];
var hdarr = ["20 places to visit in New Delhi","The religions of India"];
var txt = "India is a beautiful country, there is no doubt about that, its cultural diversity provides thousands of perspectives for the most intrepid traveler; from natural landscapes of incalculable beauty, to palaces, museums, temples, galleries and popular squares that leave anyone astonished; every corner of this wonderful country has something to offer.";

window.onload = function loadsong()
{
      window.alert("Hello wonderful");
      var img = document.createElement("img");
      img1.setAttribute("src","img1.png");
      img1.setAttribute("style","width: 100%;height: 100%;");

      var div1 = document.createElement("div");
      div1.setAttribute("class","col-sm-10");
      div1.appendChild(img1);

      var h = document.createElement("h2");
      var p = document.createElement("p");
      var a = document.createElement("a");

      h.appendChild(document.createTextNode("20 places to visit in New Delhi","The religions of India");
      p.setAttribute("class","text-success");

      p.appendChild(document.createTextNode("India is a beautiful country, there is no doubt about that, its cultural diversity provides thousands of perspectives for the most intrepid traveler; from natural landscapes of incalculable beauty, to palaces, museums, temples, galleries and popular squares that leave anyone astonished; every corner of this wonderful country has something to offer.");
      a.setAttribute("href","#");
      a.setAttribute("class","btn btn-primary");

      a.appendChild(document.createTextNode("See more..");

      var div2 = document.createElement("div");
      div2.setAttribute("class","col-sm-2");

      div2.appendChild(h);
      div2.appendChild(p);
      div2.appendChild(a);

      var divf = document.getElementById("cardview");

      divf.setAttribute("class","container-fluid bg-dark text-white list-group list-group-horizontal");
      divf.setAttribute("style","height: 500px;");

      divf.appendChild(div1);
      divf.appendChild(div2);
      // body...
      addcard(imgarr,hdarr,txt);
}

function addcard(imgar,hdar,txtt) 
{
      for (var i = 0; i < imgar.length; i++) 
      {
      // body...
      if (i%2 == 0)
      {
            var img = document.createElement("img");

            img.setAttribute("src",imgar[i]);
            img.setAttribute("style","width: 100%;height: 100%;");

            var div1 = document.createElement("div");

            div1.setAttribute("class","col-sm-10");

            div1.appendChild(img);

            var h = document.createElement("h2");
            var p = document.createElement("p");
            var a = document.createElement("a");

            h.appendChild(document.createTextNode(hdar[i]));
            p.setAttribute("class","text-success");

            p.appendChild(document.createTextNode(txtt));
            a.setAttribute("href","#");
            a.setAttribute("class","btn btn-primary");

            a.appendChild(document.createTextNode("See more..");

            var div2 = document.createElement("div");
            div2.setAttribute("class","col-sm-2");

            div2.appendChild(h);
            div2.appendChild(p);
            div2.appendChild(a);

            var divf = document.getElementById("cardview");

            divf.setAttribute("class","container-fluid bg-dark text-white list-group list-group-horizontal");
            divf.setAttribute("style","height: 500px;");

            divf.appendChild(div1);
            divf.appendChild(div2);

            i++;
      }
      else
      {
            var img = document.createElement("img");

            img.setAttribute("src",imgar[i]);
            img.setAttribute("style","width: 100%;height: 100%;");

            var div1 = document.createElement("div");

            div1.setAttribute("class","col-sm-10");

            div1.appendChild(img);

            var h = document.createElement("h2");
            h.appendChild(document.createTextNode(hdar[i]));
            var p = document.createElement("p");
            var a = document.createElement("a");
            p.setAttribute("class","text-primary");
            p.appendChild(document.createTextNode(txtt));
            a.setAttribute("href","#");
            a.setAttribute("class","btn btn-success");
            a.appendChild(document.createTextNode("See more..");

            var div2 = document.createElement("div");
            div2.setAttribute("class","col-sm-2");

            div2.appendChild(h);
            div2.appendChild(p);
            div2.appendChild(a);

            var divf = document.getElementById("cardview");

            divf.setAttribute("class","container-fluid bg-dark text-white list-group list-group-horizontal");
            divf.setAttribute("style","height: 500px;");

            divf.appendChild(div2);
            divf.appendChild(div1);

            i++;
      }
}
}

 