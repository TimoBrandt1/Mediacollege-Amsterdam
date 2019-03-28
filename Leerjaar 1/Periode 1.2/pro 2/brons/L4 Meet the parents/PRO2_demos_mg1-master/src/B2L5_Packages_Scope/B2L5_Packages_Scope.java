package B2L5_Packages_Scope;
import B2L5_Packages_Scope.utils.Calculator;
import B2L5_Packages_Scope.utils.Whatever;
import food.fastfood.Hamburger;

public class B2L5_Packages_Scope {

    public static void main(String[] args){
        System.out.println("hallo ik kom uit een package");

        Hamburger h = new Hamburger();
        h.sayHello();


    }
}
