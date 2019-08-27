function fun()
{
var fuserv=document.forms[0].fuser.value;
var luserv=document.forms[0].luser.value;
var userv=document.forms[0].user.value;
var pwdv=document.forms[0].pwd.value;
var dobv=document.forms[0].dob.value;
var pcv=document.forms[0].pc.value;
var emailv=document.forms[0].email.value;
var phv=document.forms[0].ph.value;
var fuserreg=/[a-z A-Z]*/;
var luserreg=/[a-z A-Z]/;
var userreg=/[a-zA-Z][a-zA-Z0-9]*/;
var pcreg=/[0-9]/;
var dobreg=/[0-9]{2}-[0-9]{2}-[0-9]{2}/;
var emailreg=/[a-zA-Z][a-zA-Z0-9_.]*@[a-zA-Z][a-zA-Z0-9_.]*.[a-zA-Z][azA-Z0-9_.]{2}.[a-zA-Z][a-zA-Z0-9_.]{2}$|^[a-zA-Z][a-zA-Z0-9_.]*@[a-zA-Z][a-zA-Z0-9_.]*.[a-zAZ][a-zA-Z0-9_.]{3}/;
var phreg=/[0-9]{10}/;
var rfuser=fuserreg.test(fuserv);
var rluser=luserreg.test(luserv);
var ruser=userreg.test(userv);
var rpc=pcreg.test(pcv);
var rdob=dobreg.test(dobv);
var remail=emailreg.test(emailv);
var rph=phreg.test(phv);
if(rfuser && rluser && ruser && rdob && rpc && remail && rph && (pwdv.length > 6))
{
alert("All values are valid");
return true;
}
else
{
if(!rfuser) { 
	alert("firstname invalid");
	document.forms[0].fuser.focus();
}

if(!rluser) { alert("lastname invalid");document.forms[0].luser.focus();}
if(!ruser) { alert("username invalid");document.forms

[0].user.focus();}
if(!rdob) {alert("date of birth invalid");document.forms

[0].dob.focus();}
if(!rpc) {alert("postal code invalid");document.forms

[0].pc.focus();}
if(!remail) { alert("password invalid");document.forms

[0].email.focus();}
if(!rph) { alert("phone number invalid");document.forms

[0].ph.focus();}
if(pwdv.length < 6) { alert("password invalid");document.forms[0].pwd.focus();}
return false;
}
}