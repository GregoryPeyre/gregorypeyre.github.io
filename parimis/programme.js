$(function() {
  // Calcul du ratio de taille de la première image
  var largeurImages = $('#diaporama img').width();
  var hauteurImages = $('#diaporama img').height();
  var ratio = largeurImages / hauteurImages;
  // Application du ratio à la hauteur de #diaporama
  var hauteurDiaporama = function() {
    $('#diaporama').height($('#diaporama').width() / ratio);
  };
  // Calcul de la hauteur de #diaporama au chargement
  hauteurDiaporama();
  // Calcul de la hauteur de #diaporama à chaque modification de la taille de la fenêtre;
  $(window).resize(hauteurDiaporama);
  $('#diaporama img').first().addClass('active');
  var duree = 3000;
  var changementDiapo = function() {
    // 1 ciblage de .active
    // 2 masquage de .active et suppression de la class
    // 3 recherche de l'image suivante et ajout de la class active
    // 4 affichage de l'image suivante
    var element = $('.active').fadeOut(duree / 2.5).removeClass('active');
    if (element.next().length) {
      element.next().addClass('active').fadeIn(duree / 2.5);
    } else {
      element.parent().children().first().addClass('active').fadeIn(duree / 2.5);
    }
  };
  setInterval(changementDiapo,duree);
});


// Programme pour les avis
$(function(){
   var divs = $(".boxes");
   divs.not("#box1").hide();
   $("a.avis").click(function(){
     divs.filter(":visible").hide();
     $($(this).attr("href")).show();
     return false;
   });
 });
