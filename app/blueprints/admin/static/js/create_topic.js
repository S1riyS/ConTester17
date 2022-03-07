import {showAlert} from "../../../../static/js/modules/alert.js";

$("#create_topic_from").submit(function (event) {
    event.preventDefault();

    let data = {
        grade_id: $('#dropdown__grade').find('.dropdown-item.active').data('value'),
        name: $('#topic__name').val()
    }

    $.ajax({
        type: 'POST',
        url: '/api/create_topic',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(data),
        success: function (response) {
            let type;

            if (response['success']) {
                type = 'success'
            } else {
                type = 'danger'
            }
            showAlert(response['message'], type);
        },
        error: function(xhr, textStatus, error) {
            showAlert('Что то пошло не так', 'danger');
        }
    });
});