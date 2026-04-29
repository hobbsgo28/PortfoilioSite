<head>
  <?php include("fonts.php"); ?>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<?php include("header.php"); ?>

<!-- 
<div class="view-container" id="draw-container">
    <h1>Draw Box</h1>
</div>
<div class="input-container" id="lineWidth">
    <h3>Line Width</h3>
</div> -->


<!-- <div class="draw"> -->
<section class="container-drawBox">
  <div class="container-tool">
    <div class="toolbar" id="toolbar">
      <h1> Draw </h1>
      <label for="stroke">Stroke Color</label>
      <input id="stroke" name='stroke' type="color" value="rgb(13, 13, 13)" />
      <label for="lineWidth">Line Width</label>
      <input id="lineWidth" name='lineWidth' type="number" value="5" />
      <button id="clear">Clear</button>
    </div>
  </div>

  <div class="drawing-board">
    <canvas id="drawing-board"></canvas>
  </div>
</section>
<!-- </div> -->
<script src="drawBox.js"></script>

</body>
<?php include("footer.php"); ?>