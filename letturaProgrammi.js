function getVersione(url, prog, callback)
{
	let aFile = new XMLHttpRequest();
	aFile.open("GET", url, true);
	aFile.send();

	aFile.onreadystatechange = function ()
	{
		if (aFile.readyState == 4 && aFile.status == 200)
		{
			let f = aFile.responseText;
			let i = f.search(prog);
			let v = f.substr(1 + i + prog.length, 8);

			callback(v);
		}
	}
}