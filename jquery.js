(function () {
    document.getElementById("submitForm").onsubmit = function(e) {
        e.preventDefault();
    };

jQuery(document).ready(function(){  //ab coade run goga yaha se
var status = true;                  //return true/false k liye


    jQuery("#ename").hide();   //initially error-tag(name) show na kre isi liye
    jQuery("#e_mail").hide();
    jQuery("#egen").hide();    
    jQuery("#emono").hide();
    jQuery("#ehob").hide();
    jQuery("#eAddress").hide();


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NAME Validation Start~~~~~~~~~~~~~~~~~~~~~~~~~
    jQuery("#username").keyup(function(){
        let mono
        // ---------------------AMAN SIR-Start------------------
    //     jQuery("#ename").hide();
    // var name=jQuery("#username").val();
    // let reg_name =/^[a-zA-Z ]{1,16}$/;
    
    // if(!name.match(reg_name))
    // {
    //     jQuery("#ename").show();
    //     status = false;
    //     // return false;
    // }
    // else{status = true; }
        // ---------------------AMAN SIR-End------------------

        // ---------------------My-Start----------------------

        jQuery("#ename").hide();
        var name = jQuery("#username").val();
        let reg_name = /^[a-zA-Z ]{2,16}$/;

        if(!name.match(reg_name)){
            jQuery("#ename").show();
            status = false;
        }
        // else{
        //     status = true;
        // }
    });
         // ---------------------My-End------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NAME Validation End~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Email Validation Start~~~~~~~~~~~~~~~~~~~~~~~~~

    jQuery("#useremail").keyup(function(){
        jQuery("#e_mail").hide();
        let mail=$("#useremail").val();
        let emreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!mail.match(emreg)){
            jQuery("#e_mail").show();
            status = false;
        }
        // else{status = true}
    })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Email Validation End~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Gender Validation Start~~~~~~~~~~~~~~~~~~~~~~~~~

    jQuery("#MobileNo").click(function(){
     jQuery("#egen").hide();    
        let gen_value = $('input[name=gender]:checked').val();
        if(gen_value != "male" && gen_value != "female"){
            jQuery("#egen").show();
            status = false;
        }

    })
    

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Gender Validation End~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Mbile Validation Start~~~~~~~~~~~~~~~~~~~~~~~~~

    jQuery("#MobileNo").keyup(function(){
        jQuery("#emono").hide();

        let mono = jQuery("#MobileNo").val();
        let monoreg=/^(\d{10}|\d{11}|\d{12})$/;

        if(!mono.match(monoreg)){
            jQuery("#emono").show();
            status = false;
        }
    })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Mbile Validation End~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Hobby Validation Start~~~~~~~~~~~~~~~~~~~~~~~~~

    jQuery("#myadd").click(function(){
    jQuery("#ehob").hide();

        var hobs = jQuery( "#hoobies input:checked" ).length;
        
        if(hobs<3){
            jQuery("#ehob").show();
            status = false;
        }
    })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Hobby Validation End~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Address Validation Start~~~~~~~~~~~~~~~~~~~~~~~~~

    jQuery("#myadd").keyup(function(){
        debugger
        let address = jQuery("#myadd").val();
        if(address.length>10){
            jQuery("#eAddress").show();
        }
        
    })

    return status;
})

})();  