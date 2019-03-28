import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class B2L3_getters_setters {

    public static void main(String[] args) {
        ArrayList<Pancake> pancakes = new ArrayList<Pancake>();

        Random rand = new Random();

        for (int i = 0; i < 5; i++) {
            pancakes.add(new Pancake());
            pancakes.get(i).setTemperature(rand.nextInt(100));
        }


       // while (!pancakes.isEmpty()) {
        for(Pancake p : pancakes) {
            p.takeBite(50);
            if (p.getWeight() <= 0) {


                //pancakes.remove(p);


            }

        }
        //}
    }
}



