$(document).ready(function () {

    $.ajax({
        url: 'https://covid19.mathdro.id/api/countries/indonesia/confirmed',
        type: 'GET',
        dataType: 'JSON',
        success: function (result) {
            let covid19Case = result;
            $.each(covid19Case, function (i, data) {
                $('#konfirmasi').html(
                    `<p> ${data.confirmed}</p>`
                ).mask("#.##0.000", {reverse: true});

                $('#dirawat').html(
                    `<p>${data.active}</p>`
                ).mask("#.##0.000", {reverse: true});

                $('#sembuh').html(
                    `<p>${data.recovered}</p>`
                ).mask("#.##0.000", {reverse: true});

                $('#meninggal-dunia').html(
                    `<p>${data.deaths}</p>`
                ).mask("#.##0.000", {reverse: true});
            })

        },
    });

    $.ajax({
        url: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian',
        type: 'GET',
        dataType: 'JSON',
        success: function (result) {
            let covid19Case = result;
            let dayCase = covid19Case.pop()
            $.each(covid19Case, function () {
                $('#harian-konfirmasi').html(
                    `<p><i class="bi-arrow-up-circle"></i> ${dayCase.positif}</p>`
                );

                $('#harian-dirawat').html(
                    `<p>${dayCase.dirawat}</p>`
                );
                $('#harian-sembuh').html(
                    `<p><i class="bi-arrow-up-circle"></i> ${dayCase.sembuh}</p>`
                );

                $('#harian-meninggal-dunia').html(
                    `<p><i class="bi-arrow-up-circle"></i> ${dayCase.meninggal}</p>`
                );
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
                    `<p>Pembaruan Terakhir : ${lastTime.locale('id').format('LLLL')}</p>`
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


    var o = $("#back-to-top");
    $(window).scroll((function () {
        $(window).scrollTop() > 150 ? o.addClass("show") : o.removeClass("show")
    })), o.on("click", (function (o) {
        o.preventDefault(), $("html, body").animate({
            scrollTop: 0
        }, "300")
    }))

});