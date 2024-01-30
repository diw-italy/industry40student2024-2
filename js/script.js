

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":978},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
function validateForm() {
    // Validate text fields
    var fields = ["name", "surname", "institute", "course", "graduationYear", "email", "phone"];
    for (var i = 0; i < fields.length; i++) {
        var field = document.forms["RegisterIndustryContest"][fields[i]].value;
        if (field == null || field == "") {
            alert("All fields must be filled out");
            return false;
        }
    }

    // Validate gender radio buttons
    if (!document.querySelector('input[name="gender"]:checked')) {
        alert("Please select a gender");
        return false;
    }

    // Validate checkboxes
    if (!document.forms["RegisterIndustryContest"]["acceptRegulations"].checked ||
        !document.forms["RegisterIndustryContest"]["acceptPrivacy"].checked) {
        alert("You must agree to the contest regulations and privacy policy");
        return false;
    }

    // Validate reCAPTCHA
    var recaptcha = grecaptcha.getResponse();
    if (recaptcha.length == 0) {
        alert("Please verify that you are not a robot");
        return false;
    }

    return true;
}