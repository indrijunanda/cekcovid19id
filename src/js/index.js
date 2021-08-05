$(document).ready(function () {
    $.ajax({
        url: 'https://covid19.mathdro.id/api/countries/indonesia/confirmed',
        type: 'GET',
        dataType: 'JSON',
        success: function (result) {
            let covid19Case = result;
            $.each(covid19Case, function (i, data) {
                $('#konfirmasi').html(
                    `<p class="angka-kasus"> ${data.confirmed}</p>`
                );

                $('#dirawat').html(
                    `<p class="angka-kasus">${data.active}</p>`
                );

                $('#sembuh').html(
                    `<p class="angka-kasus">${data.recovered}</p>`
                );

                $('#meninggal-dunia').html(
                    `<p class="angka-kasus">${data.deaths}</p>`
                )

            })
        },
    });

    $.ajax({
        url: 'https://covid19.mathdro.id/api/countries/indonesia/',
        type: 'GET',
        dataType: 'JSON',
        success: function (result) {
            let covid19Case = result;
            let lastTime = moment(covid19Case.lastUpdate)
            $.each(lastTime, () => {
    
                $('#terakhir-update').html(
                    `<p>${lastTime.locale('id').format('LLLL')}</p>`
                )
            })
        },
    });

    $.ajax({
        url: 'https://indonesia-covid-19.mathdro.id/api/provinsi',
        type: 'GET',
        dataType: 'JSON',
        success: function (result) {
            let covid19Case = result.data;
            $.each(covid19Case, function (i, data) {
                $('#listnya').append(
                    `<div class="col-lg-4 col-md-4 mb-4">
                        <div class="card shadow">
                            <div class="card-body">
                                <h6 class="card-title"><b>${data.provinsi}</b></h6>
                                <hr class="py-1">
                                <h6 class="card-subtitle mb-3 text-muted"><i class="fas fa-plus"></i> Positif : <span class="float-right"><b>${data.kasusPosi}</b></span></h6>
                                <p class="card-text text-success"><i class="far fa-smile"></i> Sembuh : <span class="float-right"><b>${data.kasusSemb}</b></span></p>
                                <p class="card-text text-danger mt-n2"><i class="far fa-sad-tear"></i> Meninggal Dunia : <span class="float-right"><b>${data.kasusMeni}</b></span></p> 
                            </div>
                        </div>
                    </div>`
                )
            })
        },
    })

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + ' / ' + mm + ' / ' + yyyy;
    document.getElementById('tanggal').innerHTML = 'Data Pertanggal ' + today;


});