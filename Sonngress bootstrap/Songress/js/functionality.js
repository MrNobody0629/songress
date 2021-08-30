function addsectionhide()
{
	// body...
	document.getElementById("addsection").style.display ="none";
}

function hidequeue()
{
	// body...
	document.getElementById("songList").style.display ="none";
}

function openprofilecard()
{
	// body...
	var x=document.getElementById("profilecard");
	if (x.style.display == "block")
		x.style.display = "none";
	else
		x.style.display = "block";

}