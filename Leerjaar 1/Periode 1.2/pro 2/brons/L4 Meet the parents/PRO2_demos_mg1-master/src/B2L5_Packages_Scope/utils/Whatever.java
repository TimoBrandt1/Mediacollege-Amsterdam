package B2L5_Packages_Scope.utils;

public class Whatever {

    public Whatever(){
        Calculator c = new Calculator();
        c.operation = "optellen"; // operation is beschikbaar omdat Whatever en Calcultor in dezelfde package zitten.
    }
}
