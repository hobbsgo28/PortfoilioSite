<div class="header">
<?php 
  $currentPage = basename($_SERVER["PHP_SELF"]);
?>
  <a class="button" href="index.php">Grace Hobbs</a>
  <div class="header-right">
<?php
    if ($currentPage == "index.php"){
?>
    <label for="dropdown-content"> Options</label>
      <object class="dropdown-content">
        <a class="button" href="view.php">View</a>
        <a class="button" href="featureTest.php">Test</a>
        <a class="button" href="https://www.linkedin.com/in/grace-hobbs-2a1329376"  target="_blank" rel="noopener noreferrer"> Linkedin </a>
        <a class="button" href="resumeDisplay.php">Resume</a>
    </object>
<?php
    }

    if ($currentPage == "resumeDisplay.php"){
?>
    <label for="dropdown-content"> Options</label>
      <object class="dropdown-content">
        <a class="button" href="view.php">View</a>
        <a class="button" href="featureTest.php">Test</a>
        <a class="button" href="https://www.linkedin.com/in/grace-hobbs-2a1329376"  target="_blank" rel="noopener noreferrer"> Linkedin </a>
        <a class="button" href="index.php" > Home </a>
      </object>
<?php
  }
    if ($currentPage == "featureTest.php"){
  ?>
    <label for="dropdown-content"> Options</label>
      <object class="dropdown-content">
        <a class="button" href="view.php">View</a>
        <a class="button" href="https://www.linkedin.com/in/grace-hobbs-2a1329376"  target="_blank" rel="noopener noreferrer"> Linkedin </a>
        <a class="button" href="resumeDisplay.php">Resume</a>
        <a class="button" href="index.php" > Home </a>
    </object>
<?php
    }

    if ($currentPage == "view.php"){
?>
    <label for="dropdown-content"> Options</label>
      <object class="dropdown-content">
        <a class="button" href="featureTest.php">Test</a>
        <a class="button" href="https://www.linkedin.com/in/grace-hobbs-2a1329376"  target="_blank" rel="noopener noreferrer"> Linkedin </a>
        <a class="button" href="resumeDisplay.php">Resume</a>
        <a class="button" href="index.php" > Home </a>
    </object>
<?php 
    }

?>
  </div>
</div>