
<head> 
    <?php include("fonts.php"); ?>   
    <link rel="stylesheet" href="style.css"> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
    <script src="fractalTree.js"></script>

</head>
<body>

<?php
include("header.php");
?>

<div class="container-main"> 
        <h1>Fractal Tree</h1>
    <div class="view-container">
        <canvas id="my_canvas" width="1000" height="800"></canvas>
        <script>
            branch(16);
        </script>
        <!-- <script src="fractalTree.js"> -->
            <!-- // canvasSetup();
            // draw();
            // branch(50); -->

        <!-- </script> -->

        <!-- <script src="script.js"></script> -->
    </div>
</div>
</body>
<?php
include("footer.php");
?>