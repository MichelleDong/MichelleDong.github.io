    <script type="text/javascript">
      function replaceName() {
        var myNewName = window.prompt('Pick a new name!');
        document.getElementById('user-name').innerHTML = myNewName;
      }
      
      document.onclick = replaceName;
    </script>