const validColor = '#ced4da';
const invalidColor = 'red';
$(document).ready(function () {
    $('#firstName').on('input', function () {
        const firstName = $('#firstName').val();
        if (firstName.length <= 1 || firstName.length >= 15) {
            $('#firstNameFeedback').show();
            $('#firstName').css('border-color', invalidColor);
        } else {
            $('#firstNameFeedback').hide();
            $('#firstName').css('border-color', validColor);
        }
    });

    $('#lastName').on('input', function () {
        const lastName = $('#lastName').val();
        if (lastName.length <= 1 || lastName.length >= 15) {
            $('#lastNameFeedback').show();
            $('#lastName').css('border-color', invalidColor);
        } else {
            $('#lastNameFeedback').hide();
            $('#lastName').css('border-color', validColor);
        }
    });

    $('#email').on('input', function () {
        const email = $('#email').val();
        if (!/.+@.+\..+/.test(email)) {
            $('#emailFeedback').show();
            $('#email').css('border-color', invalidColor);
        } else {
            $('#emailFeedback').hide();
            $('#email').css('border-color', validColor);
        }
    });
});