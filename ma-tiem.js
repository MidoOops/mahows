    $(document).ready(function () {
        $('.countdown_dashboard').each(function () {
            var id = $(this).data('id');
            var c = $('#countdown_dashboard_' + id);
            var td = c.parent();
            c.countDown({
                targetDate: {
                    'day': c.data('day'),
                    'month': c.data('month'),
                    'year': c.data('year'),
                    'hour': c.data('hour'),
                    'min': c.data('min'),
                    'sec': c.data('sec')
                },
                onComplete: function () {
                    td.parent().find('.ma-teim').html('<span class="live">Live</span>');
                }
            });
        });
        var a = $(".scroll-item");
        a.owlCarousel({
            items: 4,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [776, 2],
            itemsMobile: [490, 1],
            navigation: true,
            pagination: false,
            autoPlay: 4e3,
            scrollPerPage: true,
            slideSpeed: 2e3,
            paginationSpeed: 800,
            rtl: true,
            startPosition: 0
        });
        $('.filter-days li').click(function () {
            $('.tab[data-show]').hide();
            $('.tab[data-show="' + $(this).data('show') + '"]').show();
            $('.filter-days li').removeClass('active');
            $(this).addClass('active');
        });
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var newDate = new Date();
        newDate.setDate(newDate.getDate());
        $('.edate').html(newDate.getDate());
        $('.emont').html(monthNames[newDate.getMonth()]);
        $('.eday').html(dayNames[newDate.getDay()]);
    });

    $(function () {
        var sosi = $('#sosi');
        menu = $('.main-menu ul');
        menuHeight = menu.height();
        $(sosi).on('click', function (e) {
            e.preventDefault();
            menu.slideToggle()
        });
        $(window).resize(function () {
            var w = $(window).width();
            if (w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style')
            }
        })
    });

    $(".open-soc").click(function () {
        $(".top-soc").slideToggle();
    });
