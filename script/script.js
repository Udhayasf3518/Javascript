function Do() {

  var Name = document.getElementById("name");
  var Father = document.getElementById("fathername");
  var Email = document.getElementById("email");
  var DOB = document.getElementById("dob");
  var MobileNo = document.getElementById("mobileno");
  var Address = document.getElementById("address");
  var ParAddress = document.getElementById("paraddress");
  var ParCity = document.getElementById("pardistric");
  var ParPinCode = document.getElementById("parpincode");


  var regex = /^[A-Za-z ]+$/;

  // Name

  if (Name.value != "") 
  {
    if (!regex.test(Name.value)) 
    {
      Name.style.border = "3px solid red";
      document.getElementById("name1").style.visibility = "visible";
    }
    else 
    {
      Name.style.border = "1px solid gray";
      document.getElementById("name1").style.visibility = "hidden";
    }
  }
  else
  {
    Name.style.border = "3px solid red";
    document.getElementById("name2").style.visibility = "visible";
  }

  //Father Name
  if (Father.value != "") 
  {
    if (!regex.test(Father.value)) 
    {
      Father.style.border = "3px solid red";
      document.getElementById("fathername1").style.visibility = "visible";
    }
    else 
    {
      Father.style.border = "1px solid gray";
      document.getElementById("fathername1").style.visibility = "hidden";
    }
  }
  else
  {
    Father.style.border = "3px solid red";
    document.getElementById("fathername2").style.visibility = "visible";
  }
//Email

if (Email.value != "") 
{
  if (!/(.+)@(.+){2,}\.(.+){2,}/.test(document.getElementById("email").value)) 
  {
    Father.style.border = "3px solid red";
    document.getElementById("email1").style.visibility = "visible";
  }
  else 
  {
    Email.style.border = "1px solid gray";
    document.getElementById("email1").style.visibility = "hidden";
  }
}
else
{
  Email.style.border = "3px solid red";
  document.getElementById("email2").style.visibility = "visible";
}

//Date Of Birth

if (DOB.value != "") 
  {
    if (!/^([0-9]{2})\-([0-9]{2})\-([0-9]{4})$/.test(document.getElementById("dob").value)) 
    {
      DOB.style.border = "3px solid red";
      document.getElementById("dateofbirth1").style.visibility = "visible";
    }
    else 
    {
      DOB.style.border = "1px solid gray";
      document.getElementById("dateofbirth1").style.visibility = "hidden";
    }
  }
  else
  {
    DOB.style.border = "3px solid red";
    document.getElementById("dateofbirth2").style.visibility = "visible";
  }

  //Mobile Number
  if (MobileNo.value != "") 
  {
    if (!/^([6-9]{1})([0-9]{9})$/.test(document.getElementById("mobileno").value)) 
    {
      MobileNo.style.border = "3px solid red";
      document.getElementById("mobileno1").style.visibility = "visible";
    }
    else 
    {
      MobileNo.style.border = "1px solid gray";
      document.getElementById("mobileno1").style.visibility = "hidden";
    }
  }
  else
  {
    MobileNo.style.border = "3px solid red";
    document.getElementById("mobileno2").style.visibility = "visible";
  }

  //Current Address
  if (Address.value != "") 
  {
    Address.style.border = "2px solid gray";
    document.getElementById("address1").style.visibility = "hidden";
  }
  else
  {
      Address.style.border = "1px solid red";
      document.getElementById("address1").style.visibility = "visible";
  }
  
  //Permanent Address

  if (ParAddress.value != "") 
  {
    ParAddress.style.border = "1px solid gray";
    document.getElementById("address1").style.visibility = "hidden";
  }
  else
  {
    ParAddress.style.border = "3px solid red";
    document.getElementById("address1").style.visibility = "visible";
  }

  //City
  if (ParCity.value != "") 
  {
    ParCity.style.border = "1px solid gray";
    document.getElementById("paradistric1").style.visibility = "hidden";
  }
  else
  {
    ParCity.style.border = "3px solid red";
    document.getElementById("paradistric1").style.visibility = "visible";
  }

  //Zipcode

  if (ParPinCode.value != "") 
  {
    if (!/^[6-7][0-9]{5}$/.test(document.getElementById("mobileno").value)) 
    {
      ParPinCode.style.border = "3px solid red";
      document.getElementById("parapincode1").style.visibility = "visible";
    }
    else 
    {
      ParPinCode.style.border = "1px solid gray";
      document.getElementById("parapincode1").style.visibility = "hidden";
    }
  }
  else
  {
    ParPinCode.style.border = "3px solid red";
    document.getElementById("parapincode1").style.visibility = "hidden";
  }
}