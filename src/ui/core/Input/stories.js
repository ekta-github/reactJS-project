import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Input from ".";

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function valid_postcode(postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}

function dateChange(e){
    let element=document.getElementById('dateValue');
    let dateval = element.value;
    if((dateval.length == 2 || dateval.length == 5) && e.keyCode !== 8){
        $(dateValue).val($(dateValue).val() + "/");
    }
}
  
function emailValidate(){
    let element=document.getElementById('email');
    let value = element.value;
    if(isEmail(value)){
        element.classList.remove("has-error");
    }else{
        element.classList.add("has-error");
    }
	
};

function classChange(){
    $("#email").removeClass("has-error");
    $("#postcode").removeClass("has-error");
	$("#name`").removeClass("has-error");
	$("#amount").removeClass("has-error");
}

function postValidate(){
    let element=document.getElementById('postcode');
    let value = element.value;
    if(valid_postcode(value)){
        element.classList.remove("has-error");
    }else{
        element.classList.add("has-error");
    }
};

function validateAmount(amount)
{   
var amount = $("#amount").val();
    var expression=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	var amntExp=/^[0-9]+$/;
    return amntExp.test(amount);
}
function validateNameString(name)
{
	var name = $("#name").val();
	var stringExp= /^[^\\\/&]*$/;
	var nameTest= name.replace(/ +/g, "");
	console.log(nameTest);
	var stringExprsn=/^[A-Za-z]+$/;
	return stringExprsn.test(nameTest);
}

storiesOf("Input", module)

	.add("address search postcode validation",() => (
	 <div class="col-md-6">
        <Input type="text" id="postcode" className = "form-control" name = "pvalidation" placeholder = "Postcode"  maxLength="8" onBlur = {postValidate} onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")} onChange={action("on change")} />

	</div>
	 )).add("Date validation",() => (
        <div class="col-md-6">
           <Input type="text" id="dateValue" className = "form-control" name = "datevalidation" placeholder = "Date(DD/MM/YYYY)"  maxLength="10" onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")} onKeyUp={dateChange} />
        </div>
        )) 
	.add("Email address validation",() => (
	 <div class="col-md-6">
        <Input className = "form-control" id="email" name = "emailvalidation" placeholder = "email"  onChange={classChange} onBlur = {validate} onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")} />
        <Input type="text" className = "form-control" id="email" name = "validation" placeholder = "email"  onBlur = {emailValidate} onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")} />
	 </div>
   ))
   .add("Name validation",() => (
	 <div class="col-md-6">
        <Input className = "form-control" id="name" name = "namevalidation" placeholder = "Name"  onChange={classChange} onBlur = {validateNameString} onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")} />
	 </div>
   ))	
   .add("Amount validation",() => (
	 <div class="col-md-6">
        <Input className = "form-control" id="amount" name = "amountvalidation" placeholder = "Amount"  onChange={classChange} onBlur = {validateAmount} onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")} />
	 </div>
   ))
    .add("with text", () => (
        <Input  type="text" className = "form-control" placeholder="Postcode" onChange={action("on change")}></Input>
    )).add("with no of characters validation", () => (
        <Input type="text" className = "form-control" maxLength={5} ></Input>
    )).add("with First Letter Capital", () => (
        <Input type="text" className="capital form-control"></Input>
    )).add("mouse hover",() => (
        <Input type="text" className = "form-control" name = "mousehover" onHover = {action("mouse hover")} title="Value should be greater than 6"/>
    )).add("mouse leave",() => (
        <Input type="text" className = "form-control" name = "mousehover" onHoverOff = {action("mouse left")}/>
    )).add("Disable",() => (
        <Input type="text" className = "form-control" name = "Disable" disable = {true} title="Disabled"/>
    )).add("mixed",() => (
        <Input type="text" className = "form-control" name = "all" placeholder = "date value" minLength="5" onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")}  />
    )).add("mixed1",() => (
        <Input type="text" className = "form-control" name = "all" placeholder = "date value" onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")} onBlur = {action("Blur place")} />
    )).add("with type tel for device keypad",() => (
        <Input type="tel" className = "form-control" name = "all" placeholder = "date value" onHover = {action("mouse present in input box")} onHoverOff = {action("mouse left")} onBlur = {action("Blur place")} />
    ));