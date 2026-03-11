<head> 
    <?php include("fonts.php"); ?>   
    <link rel="stylesheet" href="style.css"> 
</head>
<body>

<?php
    include("header.php");
?>
<div class="container">

    <h1> My Resume </h1>


<!-- <embed src="HobbsResume2026.pdf" type="application/pdf" width="70%" height="600px" /> -->

<iframe src="HobbsResume2026.pdf" width="70%" height="600px"></iframe>
<!-- 
<object data="HobbsResume2026.pdf" type="application/pdf" width="70%" height="600px">
<p>Your browser does not support PDFs. 
</object> -->
<!-- <a href="file_path/file_name.pdf">Download the PDF</a>.</p> -->


<!-- <p>Open a PDF file <a href="C:\xampp\htdocs\ResumeHobbs\HobbsResume2026.pdf">example</a>.</p> -->

<a class="button" href="HobbsResume2026.pdf" download="HobbsResume2026.pdf"> Download my Resume </a>
</div>
</body>

<?php
include("footer.php");
?>
