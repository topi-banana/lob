function onButtonClick() {
	target = document.getElementById("output");
	target.innerText = document.forms.id_form1.id_textBox1.value;
	//target.innerText = document.id_form1.id_textBox1.value;//これでもOK
}
/*
let search = document.(search_box).(search_botton)
fetch('https://ipinfo.io?callback')
  .then(res => res.json())
  //.then(json => console.log(json.ip))
  .then(json => document.write(json.ip))
*/
