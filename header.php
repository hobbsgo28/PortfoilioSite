<div class="header">
<?php 
  $currentPage = basename($_SERVER["PHP_SELF"]);
?>
  <a class="button" href="index.php">Grace Hobbs</a>
  <div class="header-right">
<?php
  if ($currentPage == "index.php"){
  ?>
  <!-- <object class="button"> Options </object> -->
   <p>Options</p>
    <object class="dropdown-content">
  <a class="button"> Dummy</a>
  <a class="button"> Dummy</a>

  <a class="button" href="resumeDisplay.php" > Resume</a>
</object>
<?php
  }
  if ($currentPage == "resumeDisplay.php"){
?>
  <div class="dropdown-content"> 
  <a class="button" href="index.php" > Home </a>
</div>
<?php
}
?>
  <!-- <a href="www.linkedin.com/in/grace-hobbs-2a1329376" target="_blank" rel="noopener noreferrer"> Linkedin </a> -->
  <!-- <a href="HobbsResume2026.pdf" > Resume </a>
  <a href="resumeDisplay.php" > Resume Dsiplay</a> -->

</div>
</div>