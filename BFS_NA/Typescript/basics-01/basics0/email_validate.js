var userMail = "adapa@sai.com";
var atTeh = userMail.indexOf("@");
var dotposition = userMail.indexOf(".");
if (atTeh == -1 || dotposition == -1) {
    console.log("Invalid emailId ".concat(userMail));
}
else {
    console.log("Vaild....");
}
