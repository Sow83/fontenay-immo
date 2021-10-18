# fontenay-immo
Ce projet est maintenable et modulaire grâce à la mise en œuvre de structures de nommage
et de fichiers conçues, telles que BEM, et à l'utilisation de SASS, un précompilateur CSS.


# Méthode de la sématique des couleurs(partiel variables.sccs): 

J'ai combiné chaque  sélecteur avec sa proprété de couleur(soit color ou background-color).
Par exemple, si on veut donner une couleur rouge aux champs du formulaire (sélecteur "form__field")
avec une couleur de fond vert on aura:

$color-primary: red;
$color-secondary: green;

$form-field-color: $color-primary;
$form-field-bg-color: $color-secondary;


  1) Avantage: 
     Toutes les couleurs seront changées dans un seul endroit, en loccurence dans le 
     partiel " __variables". On a plus besoin de retourner dans les partiels pour
     changer une couleur, ce qui facilite la maintenabilité. Les variables de couleur seront
     générique dans les  partiels donc ne seront  jamais changées et n'auront aucune 
     contradiction en cas de changement de couleur dans le partiel .

  2) Inconvénient: 
     On doit créer une variable de couleur pour chaque sélecteur qui a une propriété couleur.
     Le code sera conséquent.






