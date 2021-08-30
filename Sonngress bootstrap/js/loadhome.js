function mostplayed(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("class","card-img");
      img.setAttribute("src",imgs);
      img.setAttribute("alt","Album-Image");

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("class","card-img-overlay text-bottom");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create image box...
      var div = document.createElement("div");
      div.setAttribute("class","card card-outline-success");

      // Add image to image box...
      div.appendChild(img);
      div.appendChild(h5);

      // Import list to add song box...
      var slist=document.getElementById("mostplayed");
      slist.appendChild(div);
}

function t10bolly(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("class","card-img");
      img.setAttribute("src",imgs);
      img.setAttribute("alt","Album-Image");

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("class","card-img-overlay text-bottom");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create image box...
      var div = document.createElement("div");
      div.setAttribute("class","card card-outline-success");

      // Add image to image box...
      div.appendChild(img);
      div.appendChild(h5);

      // Import list to add song box...
      var slist=document.getElementById("t10bollywood");
      slist.appendChild(div);
}

function t10holly(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("class","card-img");
      img.setAttribute("src",imgs);
      img.setAttribute("alt","Album-Image");

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("class","card-img-overlay text-bottom");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create image box...
      var div = document.createElement("div");
      div.setAttribute("class","card card-outline-success");

      // Add image to image box...
      div.appendChild(img);
      div.appendChild(h5);

      // Import list to add song box...
      var slist=document.getElementById("t10hollywood");
      slist.appendChild(div);
}

function justarrived(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("class","card-img");
      img.setAttribute("src",imgs);
      img.setAttribute("alt","Album-Image");

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("class","card-img-overlay text-bottom");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create image box...
      var div = document.createElement("div");
      div.setAttribute("class","card card-outline-success");

      // Add image to image box...
      div.appendChild(img);
      div.appendChild(h5);

      // Import list to add song box...
      var slist=document.getElementById("justarrive");
      slist.appendChild(div);
}

function toppicks(imgs,name) 
{
      // Create image tag...
      var img = document.createElement("img");
      img.setAttribute("class","card-img");
      img.setAttribute("src",imgs);
      img.setAttribute("alt","Album-Image");

      // Create h5 tag for song name
      var h5 = document.createElement("h5");
      h5.setAttribute("class","card-img-overlay text-bottom");
      h5.setAttribute("onclick","playSong(this.innerText)");
      h5.appendChild(document.createTextNode(name));

      // Create image box...
      var div = document.createElement("div");
      div.setAttribute("class","card card-outline-success");

      // Add image to image box...
      div.appendChild(img);
      div.appendChild(h5);

      // Import list to add song box...
      var slist=document.getElementById("toppicks");
      slist.appendChild(div);
}