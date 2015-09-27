(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('about/about.tpl.html',
    '<section id="about">\n' +
    '	<header>About</header>\n' +
    '	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n' +
    '		diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam\n' +
    '		erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci\n' +
    '		tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\n' +
    '		consequat.</p>\n' +
    '	<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit\n' +
    '		esse molestie consequat, vel illum dolore eu feugiat nulla facilisis\n' +
    '		at vero eros et accumsan et iusto odio dignissim qui blandit praesent\n' +
    '		luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n' +
    '		Nam liber tempor cum soluta nobis eleifend option congue nihil\n' +
    '		imperdiet doming id quod mazim placerat facer possim assum. Typi non\n' +
    '		habent claritatem insitam; est usus legentis in iis qui facit eorum\n' +
    '		claritatem. Investigationes demonstraverunt lectores legere me lius\n' +
    '		quod ii legunt saepius. Claritas est etiam processus dynamicus, qui\n' +
    '		sequitur mutationem consuetudium lectorum. Mirum est notare quam\n' +
    '		littera gothica, quam nunc putamus parum claram, anteposuerit\n' +
    '		litterarum formas humanitatis per seacula quarta decima et quinta\n' +
    '		decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant\n' +
    '		sollemnes in futurum.</p>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/home.tpl.html',
    '<section id="home">\n' +
    '    <div class="container text-center">\n' +
    '        <header>I\'m Solidion</header>\n' +
    '\n' +
    '        <h3>Solidion is an elegant and responsive HTML template. Typi non\n' +
    '            habent claritatem insitam, est usus legentis in iis qui facit eorum\n' +
    '            claritatem. Investigationes demonstraverunt lectores legere me lius\n' +
    '            quod ii legunt saepius.</h3>\n' +
    '\n' +
    '        <button class="btn btn-primary">Discover</button>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<section id="about" class="ng-scope" style="min-height: 100vh;">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-3 padding0  animated fadeInLeft" style="overflow: hidden;" ani-view>\n' +
    '            <img\n' +
    '                    src="/images/leaf.jpg"\n' +
    '                    class="" style="height: 100vh;">\n' +
    '        </div>\n' +
    '        <div class="text-justify col-sm-9"\n' +
    '             style="min-height: 100vh;">\n' +
    '            <header>About Our Company</header>\n' +
    '\n' +
    '\n' +
    '            <div class="col-xs-12">\n' +
    '                Lorem ipsum dolor sit amet, consectetuer\n' +
    '                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n' +
    '                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim\n' +
    '                veniam, quis nostrud exerci tation ullamcorper suscipit lobortis\n' +
    '                nisl ut aliquip ex ea commodo consequat. Claritas est etiam\n' +
    '                processus dynamicus, qui sequitur mutationem consuetudium\n' +
    '                lectorum. Mirum est notare quam littera gothica, quam nunc putamus\n' +
    '                parum claram, anteposuerit litterarum formas humanitatis per\n' +
    '                seacula quarta decima et quinta decima. Eodem modo typi, qui nunc\n' +
    '                nobis videntur parum clari, fiant sollemnes in futurum.\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div class="col-sm-6 voffset3">Duis autem vel eum iriure dolor in\n' +
    '                hendrerit in vulputate velit esse molestie consequat, vel illum\n' +
    '                dolore eu feugiat nulla facilisis at vero eros et accumsan et\n' +
    '                iusto odio dignissim qui blandit praesent luptatum zzril delenit\n' +
    '                augue duis dolore te feugait nulla facilisi. Nam liber tempor cum\n' +
    '                soluta nobis eleifend option congue nihil imperdiet doming id quod\n' +
    '                mazim placerat facer possim assum. Typi non habent claritatem\n' +
    '                insitam; est usus legentis in iis qui facit eorum claritatem.\n' +
    '                Investigationes demonstraverunt lectores legere me lius quod ii\n' +
    '                legunt saepius.\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="col-sm-offset-1 col-sm-5 voffset3">\n' +
    '                <div class="progress">\n' +
    '                    <div class="progress-bar" role="progressbar" aria-valuenow="60"\n' +
    '                         aria-valuemin="0" aria-valuemax="100" style="width: 60%;"\n' +
    '                         data-toggle="tooltip" data-placement="top" tooltip="HTML / HTML5" title="HTML / HTML5">\n' +
    '                        <span class="sr-only">60% Complete</span> <span\n' +
    '                            class="progress-type">HTML / HTML5</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="progress">\n' +
    '                    <div class="progress-bar" role="progressbar" aria-valuenow="1"\n' +
    '                         aria-valuemin="0" aria-valuemax="100" style="width: 80%;"\n' +
    '                         data-toggle="tooltip" data-placement="top" title="CSS / CSS3" tooltip="CSS / CSS3">\n' +
    '                        <span class="sr-only">80% Complete</span> <span\n' +
    '                            class="progress-type">CSS / CSS3</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="progress">\n' +
    '                    <div class="progress-bar" role="progressbar" aria-valuenow="70"\n' +
    '                         aria-valuemin="0" aria-valuemax="100" style="width: 70%;"\n' +
    '                         data-toggle="tooltip" data-placement="top" title="AngularJS" tooltip="AngularJS">\n' +
    '                        <span class="sr-only">70% Complete</span> <span\n' +
    '                            class="progress-type">AngularJS</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="progress">\n' +
    '                    <div class="progress-bar" role="progressbar" aria-valuenow="50"\n' +
    '                         aria-valuemin="0" aria-valuemax="100" style="width: 50%;"\n' +
    '                         data-toggle="tooltip" data-placement="top" title="PHP" tooltip="PHP">\n' +
    '                        <span class="sr-only">50% Complete</span> <span\n' +
    '                            class="progress-type">PHP</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="col-xs-12 voffset3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n' +
    '                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna\n' +
    '                aliquam erat volutpat. <a tooltip="Claritas est etiam processus dynamicus">Ut wisi enim ad minim\n' +
    '                    veniam</a>, quis nostrud\n' +
    '                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea\n' +
    '                commodo consequat. Claritas est etiam processus dynamicus, qui\n' +
    '                sequitur mutationem consuetudium lectorum. Mirum est notare quam\n' +
    '                littera gothica, quam nunc putamus parum claram, anteposuerit\n' +
    '                litterarum formas humanitatis per seacula quarta decima et quinta\n' +
    '                decima. Eodem modo typi, qui nunc nobis videntur parum clari,\n' +
    '                fiant sollemnes in futurum.</div>\n' +
    '\n' +
    '            <div class="col-xs-12 text-center voffset3">\n' +
    '                <button class="btn btn-default">Buy this template</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<section id="team" class="ng-scope" style="min-height: 100vh;">\n' +
    '    <div class="row">\n' +
    '        <div class="text-justify col-sm-6"\n' +
    '             style="min-height: 100vh;">\n' +
    '            <header>Our Team</header>\n' +
    '            <div class="col-xs-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n' +
    '                diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam\n' +
    '                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci\n' +
    '                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\n' +
    '                consequat. Claritas est etiam processus dynamicus, qui sequitur\n' +
    '                mutationem consuetudium lectorum. Mirum est notare quam littera\n' +
    '                gothica, quam nunc putamus parum claram, anteposuerit litterarum\n' +
    '                formas humanitatis per seacula quarta decima et quinta decima. Eodem\n' +
    '                modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in\n' +
    '                futurum.</div>\n' +
    '\n' +
    '            <img class="img-circle"\n' +
    '                 src="https://s3.amazonaws.com/uifaces/faces/twitter/tomaslau/128.jpg"/>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6" style="overflow: hidden;">\n' +
    '            <img src="https://unsplash.com/photos/BwgKUh9tN84/download" class=""\n' +
    '                 style="height: 100vh;">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<section id="portfolio" class="ng-scope" style="min-height: 100vh;">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-3 padding0" style="overflow: hidden;">\n' +
    '            <img src="https://unsplash.com/photos/ChY016PARQY/download" class=""\n' +
    '                 style="height: 100vh;">\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-justify" style="overflow: hidden;">\n' +
    '            <header>Portfolio</header>\n' +
    '            <div class="col-xs-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n' +
    '                diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam\n' +
    '                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci\n' +
    '                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\n' +
    '                consequat. Claritas est etiam processus dynamicus, qui sequitur\n' +
    '                mutationem consuetudium lectorum. Mirum est notare quam littera\n' +
    '                gothica, quam nunc putamus parum claram, anteposuerit litterarum\n' +
    '                formas humanitatis per seacula quarta decima et quinta decima. Eodem\n' +
    '                modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in\n' +
    '                futurum.</div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-3 padding0" style="overflow: hidden;">\n' +
    '            <img src="https://unsplash.com/photos/Gk6YgzmrLgM/download" class=""\n' +
    '                 style="height: 100vh;">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<section id="contact" class="ng-scope" style="min-height: 100vh;">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-6 text-justify" style="overflow: hidden;">\n' +
    '            <header>Contact</header>\n' +
    '            <div class="col-xs-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n' +
    '                diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam\n' +
    '                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci\n' +
    '                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\n' +
    '                consequat. Claritas est etiam processus dynamicus, qui sequitur\n' +
    '                mutationem consuetudium lectorum. Mirum est notare quam littera\n' +
    '                gothica, quam nunc putamus parum claram, anteposuerit litterarum\n' +
    '                formas humanitatis per seacula quarta decima et quinta decima. Eodem\n' +
    '                modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in\n' +
    '                futurum.</div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 padding0" style="overflow: hidden;">\n' +
    '            <img src="https://unsplash.com/photos/umq-jgTjr28/download" class=""\n' +
    '                 style="height: 100vh;">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();
