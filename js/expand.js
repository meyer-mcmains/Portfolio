$('.logos').click(function () {
	var logo = $(this);

	$('[data-clicked]').each(function(){
	    $(this).css('filter', 'brightness(1)');
	    $(this).css('border', 'none');
	});

	logo.css('filter', 'brightness(100)');
	$('#expand1').show();

	switch(logo.data('clicked')) {
    case 'c++':
        $('#expand1').text('C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.');
        break;
    case 'c#':
        $('#expand1').text('C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.');
        break;
    case 'masm':
    	$('#expand1').text('The Microsoft Macro Assembler (MASM) is an x86 assembler that uses the Intel syntax for MS-DOS and Microsoft Windows.');
    	break;
    case 'python':
    	$('#expand1').text('Python is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991.');
    	break;
    case 'java':
    	$('#expand1').text('Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.');
    	break;
    case 'html':
    	$('#expand1').text('Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.');
    	break;
    case 'css':
    	$('#expand1').text('Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.');
    	break;
    case 'js':
    	$('#expand1').text('JavaScript, often abbreviated as "JS", is a high-level, dynamic, untyped, and interpreted run-time language.');
    	break;
    case 'sql':
    	$('#expand1').text('SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS).');
    	break;
    case 'vs':
    	$('#expand1').text('Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft.');
    	break;
    case 'git':
    	$('#expand1').text('Git is a version control system (VCS) for tracking changes in computer files and coordinating work on those files among multiple people.');
    	break;
    default:
        $('#expand1').text('');
       	break;
}
});

$('.logos2').click(function () {
	var logo = $(this);

	$('[data-clicked2]').each(function(){
	    $(this).css('filter', 'brightness(1)');
	    $(this).css('border', 'none');
	});

	logo.css('filter', 'brightness(100)');
	$('#expand2').show();

	switch(logo.data('clicked2')) {
    case 'ps':
        $('#expand2').text('Adobe Photoshop is a raster graphics editor developed and published by Adobe Systems for macOS and Windows.');
        break;
    case 'ai':
        $('#expand2').text('Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Systems.');
        break;
    case 'maya':
    	$('#expand2').text('Autodesk Maya, commonly shortened to Maya, is a 3D computer graphics software that runs on Windows, macOS and Linux. It is used to create interactive 3D applications, including video games, animated film, TV series, or visual effects.');
    	break;
    case 'mudbox':
    	$('#expand2').text('Mudbox is a proprietary computer-based 3D sculpting and painting tool.');
    	break;
    case 'arnold':
    	$('#expand2').text('Arnold is an unbiased, physically based, ray tracing 3D rendering application created by the company Solid Angle.');
    	break;
    case 'al':
    	$('#expand2').text('AL Shaders are a library of shaders that are used with the Arnold Renderer');
    	break;
    case 'ap':
    	$('#expand2').text('Affinity Photo is a proprietary raster graphics editor by Serif for macOS and Windows. It has been described as a Photoshop alternative.');
    	break;
    case 'zbrush':
    	$('#expand2').text('ZBrush is a digital sculpting tool that combines 3D/2.5D modeling, texturing and painting.');
    	break;
    case 'cc':
    	$('#expand2').text('Adobe Creative Cloud is a software as a service offering from Adobe Systems that gives users access to a collection of software developed by Adobe for graphic design, video editing, web development, photography, and cloud services.');
    	break;
    default:
        $('#expand2').text('');
       	break;
}
});