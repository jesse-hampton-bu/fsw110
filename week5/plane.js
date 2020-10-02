

myFunction = () => (fname.value, lname.value, age.value !== "") ? 
alert(" First Name: ".concat(fname.value).concat("\n")
.concat(" Last Name: ").concat(lname.value).concat("\n")
.concat(" Age: ").concat(age.value).concat("\n")
.concat(" Gender: ").concat(gender.value).concat("\n")
.concat(" Destination: ").concat(city.value).concat("\n")
.concat(" Dietary Restrictions: ").concat(dietaryrestrictions.value)) : alert(" Please Fill Out The Required Fields ")



myFunction = () => (fname.value, lname.value, age.value !== "") ? 
alert(" First Name: " + "" + (fname.value) + "" + ("\n")
 + "" + (" Last Name: ") + "" + (lname.value) + "" + ("\n")
 + "" + (" Age: ") + "" + (age.value) + "" + ("\n")
 + "" + (" Gender: ") + "" + (gender.value) + "" + ("\n")
 + "" + (" Destination: ") + "" + (city.value) + "" + ("\n")
 + "" + (" Dietary Restrictions: ") + "" + (dietaryrestrictions.value)) :
  alert(" Please Fill Out The Required Fields ")