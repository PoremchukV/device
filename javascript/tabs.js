function service(evt, sName) {
    let i, tabcontent, tabBtn;
    tabcontent = document.getElementsByClassName("tab__section");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabBtn = document.getElementsByClassName("tab__divider");
    for (i = 0; i < tabBtn.length; i++) {
      tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }
    document.getElementById(sName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();



