if ("https://www.calor.co.uk/communityfund/account/login/" == window.location ){
  var name = prompt("Please enter your name")
  if (name && name.split(" ")[1]){
    var firstname = name.split(" ")[0]
    var surname = name.split(" ")[1]
    var myArray = ["btinternet.com", "virginmedia.com", "blueyonder.co.uk", "live.co.uk", "ntlworld.com", "o2.co.uk", "orange.net", "sky.com", "talktalk.co.uk", "tiscali.co.uk", "virgin.net", "wanadoo.co.uk", "bt.com","gmail.com","yahoo.com","yahoo.co.uk","hotmail.com","outlook.com","me.com","icloud.com","aol.com", "gmail.com", "gmx.com", "googlemail.com",
"google.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com",  "msn.com", "live.com"]
    var email = myArray[Math.floor(Math.random() * myArray.length)]
    jQuery("#register-firstname").val(firstname)
    jQuery("#register-lastname").val(surname)
    jQuery("#register-email").val(name.toLowerCase().replace(" ","") + "@" + email)
    jQuery("input[type=checkbox]").click()
    jQuery("input[type=password]").val(name)
    jQuery(".register button").click()
    setTimeout(function() {
      window.location = "https://www.calor.co.uk/communityfund/-up-up-and-away-equipment-purchase-for-aerial-dance-workshops"
    },2000)
  }
} else if (window.location == "https://www.calor.co.uk/communityfund/-up-up-and-away-equipment-purchase-for-aerial-dance-workshops"){
  jQuery("form#fund-project-submit select").val("10")
  jQuery("form#fund-project-submit").submit()
} else {
  setTimeout(function() {
    window.location = "https://www.calor.co.uk/communityfund/account/logout/"
  },100)
}
