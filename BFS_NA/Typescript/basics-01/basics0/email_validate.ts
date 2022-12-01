let userMail: string = "adapa@sai.com";
let atTeh: number = userMail.indexOf("@");
let dotposition: number = userMail.indexOf(".");

if (atTeh == -1 || dotposition == -1) {
  console.log(`Invalid emailId ${userMail}`);
} else {
  console.log("Vaild....");
}
