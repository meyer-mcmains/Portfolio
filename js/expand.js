var colorHex = '';
var colorHue = 0;

$('.logos').click(function () {
	var logo = $(this);

	$('[data-clicked]').each(function(){
	    $(this).css('filter', 'brightness(1) hue-rotate(' + colorHue + 'deg)');
	});

    $('[data-selected]').each(function(){
        $(this).data('selected', false);
    });

    console.log(colorHex);

    logo.data('selected', true);

	logo.css('filter', 'brightness(100) hue-rotate(0)');
	$('#expand1').show();

	switch(logo.data('clicked')) {
    case 'c++':
        $('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">C++</span> is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.</p>');
        break;
    case 'c#':
        $('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">C#</span> is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.</p>');
        break;
    case 'masm':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">The Microsoft Macro Assembler (MASM)</span> is an x86 assembler that uses the Intel syntax for MS-DOS and Microsoft Windows.</p>');
    	break;
    case 'python':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Python</span> is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991.</p>');
    	break;
    case 'java':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Java</span> is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.</p>');
    	break;
    case 'html':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Hypertext Markup Language (HTML)</span> is the standard markup language for creating web pages and web applications. HTML is one of the three core technologies of World Wide Web content production.</p>');
    	break;
    case 'css':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Cascading Style Sheets (CSS)</span> is a style sheet language used for describing the presentation of a document written in a markup language. CSS is one of the three core technologies of World Wide Web content production.</p>');
    	break;
    case 'sass':
        $('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Syntactically Awesome Stylesheets (Sass)</span> is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). </p>');
        break;
    case 'js':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">JavaScript (JS)</span>, is a high-level, dynamic, untyped, and interpreted run-time language. JavaScript is one of the three core technologies of World Wide Web content production.</p>');
    	break;
    case 'sql':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">SQL (Structured Query Language)</span> is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS).</p>');
    	break;
    case 'vs':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Microsoft Visual Studio</span> is an integrated development environment (IDE) from Microsoft.</p>');
    	break;
    case 'git':
    	$('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">GitHub</span> is a web-based Git or version control repository and Internet hosting service. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.</p>');
    	break;
    case 'aws':
        $('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Amazon Web Services (AWS)</span> provides on-demand cloud computing platforms. As of 2016, AWS has more than 70 services, spanning a wide range, including compute, storage, networking, database, analytics, application services, deployment, management, mobile, developer tools and tools for the Internet of Things.</p>');
        break;
    case 'xm':
        $('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Xamarin</span> is a platform for writing apps. With a C#-shared codebase, developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share code across multiple platforms, including Windows and macOS.</p>');
        break;
    case 'morae':
        $('#expand1').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Morae</span> is usability testing software with the ability to record, observer, and analyze usability studies.</p>');
        break;
    default:
        $('#expand1').text('');
       	break;
    }
});

$('.logos2').click(function () {
	var logo = $(this);

	$('[data-clicked2]').each(function(){
        $(this).css('filter', 'brightness(1) hue-rotate(' + colorHue + 'deg)');
    });

    $('[data-selected2]').each(function(){
        $(this).data('selected2', false);
    });

    logo.data('selected2', true);

	logo.css('filter', 'brightness(100) hue-rotate(0)');
	$('#expand2').show();

	switch(logo.data('clicked2')) {
    case 'ps':
        $('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Adobe Photoshop</span> is a raster graphics editor developed and published by Adobe Systems for macOS and Windows.</p>');
        break;
    case 'ai':
        $('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Adobe Illustrator</span> is a vector graphics editor developed and marketed by Adobe Systems.</p>');
        break;
    case 'maya':
    	$('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Autodesk Maya</span>, commonly shortened to Maya, is a 3D computer graphics software that runs on Windows, macOS and Linux. It is used to create interactive 3D applications, including video games, animated film, TV series, or visual effects.</p>');
    	break;
    case 'mudbox':
    	$('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Mudbox</span> is a proprietary computer-based 3D sculpting and painting tool.</p>');
    	break;
    case 'arnold':
    	$('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Arnold</span> is an unbiased, physically based, ray tracing 3D rendering application created by the company Solid Angle.</p>');
    	break;
    case 'al':
    	$('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">AL Shaders</span> are a library of shaders that are used with the Arnold Renderer.</p>');
    	break;
    case 'ap':
    	$('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Affinity Photo</span> is a proprietary raster graphics editor by Serif for macOS and Windows. It has been described as a Photoshop alternative.</p>');
    	break;
    case 'zbrush':
    	$('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">ZBrush</span> is a digital sculpting tool that combines 3D/2.5D modeling, texturing and painting.</p>');
    	break;
    case 'cc':
    	$('#expand2').html('<p class="svgDesc"><span class="name" style="color: ' + colorHex + ';">Adobe Creative Cloud</span> is a software as a service offering from Adobe Systems that gives users access to a collection of software developed by Adobe for graphic design, video editing, web development, photography, and cloud services.</p>');
    	break;
    default:
        $('#expand2').text('');
       	break;
    }
});

$('.click').click(function() {
    $('.colors').slideToggle(400);
});

$('.color').click(function() {
    var dot = $(this);

    switch(dot.data('color')) {
    case 'default':
        changeColor(0, '#0D9CF6');
        break;
    case 'redish':
        changeColor(152, '#FF5957');
        break;
    case 'lightgreen':
        changeColor(314, '#00B67E');
        break;
    case 'orange':
        changeColor(206, '#BD8300');
        break;
    case 'pink':
        changeColor(96, '#FF54EE');
        break;
    case 'purple':
        changeColor(50, '#8F70FF');
        break;
    default:
        break;
    }

});

function changeColor(hue, hex) {
    colorHue = hue;
    colorHex = hex;
    $('.navbar-nav>li').css('background-color', hex);
    $('.me').css('filter', 'hue-rotate(' + hue + 'deg)');
    $('.portfolio-images').css('border-color', hex);
    $('.madeUsing').css('color', hex);
    $('.made').css('filter', 'hue-rotate(' + hue + 'deg)');
    $('.contact-image').css('color', hex);
    $('.contact').css('color', hex);
    $('.inLink').css('color', hex);
    $('.recolor').css('color', hex);
    $('.lightbox .lb-image').css('border-color', hex);
    $('.lb-data .lb-close').css('filter', 'hue-rotate(' + hue + 'deg)');
    $('.name').css('color', hex);

    $('[data-selected]').each(function(){
        if ($(this).data('selected') === false) {
            $(this).css('filter', 'hue-rotate(' + hue + 'deg)');
        }
    });

    $('[data-selected2]').each(function(){
        if ($(this).data('selected2') === false) {
            $(this).css('filter', 'hue-rotate(' + hue + 'deg)');
        }
    });

}


$('.navbar-nav>li a').hover(function(e) { 
    $(this).css('color',e.type === 'mouseenter'?colorHex:'#F2F2F2') 
});

$('.navbar-brand').hover(function(e) { 
    $(this).css('color',e.type === 'mouseenter'?colorHex:'#F2F2F2') 
});