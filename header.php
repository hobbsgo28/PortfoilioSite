<div class="header">
<?php 
  $currentPage = basename($_SERVER["PHP_SELF"]);
?>

  <!-- <h1> Grace Hobbs </h1> -->
  <a class="button" href="index.php">Grace Hobbs</a>
  <div class="header-right">
<?php
  if ($currentPage == "index.php"){
  ?>
  <!-- <a href="HobbsResume2026.pdf" > Resume </a> -->
  <a class="button" href="resumeDisplay.php" > Resume</a>

<?php
  }
  if ($currentPage == "resumeDisplay.php"){
?>

  <!-- <a href="HobbsResume2026.pdf" > Resume </a> -->
  <a class="button" href="index.php" > Home </a>
<?php
}
?>
  <!-- <a href="www.linkedin.com/in/grace-hobbs-2a1329376" target="_blank" rel="noopener noreferrer"> Linkedin </a> -->
  <!-- <a href="HobbsResume2026.pdf" > Resume </a>
  <a href="resumeDisplay.php" > Resume Dsiplay</a> -->

</div>
</div>