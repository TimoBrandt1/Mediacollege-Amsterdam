import java.util.Scanner;

public class Main {

    Scanner s = new Scanner(System.in);

    public static void main(String[] args) {

        //Dit is de var voor de voortuigen
        String vType;

        //Dit is de vraag welk voortuig je gebruikt
        System.out.println("Welk voertuig gebruikt u momenteel?\n" + "Auto \n" + "Scooter\n" + "Fiets\n");


        Scanner s = new Scanner(System.in);
        vType = s.nextLine();





        Main main = new Main();

        if(vType.contains("auto"))
        {
            main.auto();
        }
        else if(vType.contains("Auto"))
        {
            main.auto();
        }

        else if(vType.contains("scooter"))
        {
            main.scooter();
        }
        else if(vType.contains("Scooter"))
        {
            main.scooter();
        }

        else if(vType.contains("fiets"))
        {
            main.fiets();
        }
        else if(vType.contains("Fiets"))
        {
            main.fiets();
        }
        else {
            System.out.println("Verkeerde voertuig! Voer de volgende keer een van de volgende voertuigen in: \n Auto \n Scooter \n Fiets");
        }
    }

    public void auto() {
        System.out.println("Heeft u een rijbewijs?");

        String rijbewijs;
        rijbewijs = s.nextLine();

        if (rijbewijs.contains("nee")) {
            System.out.println("Kom maar mee naar het bureau");
        }
        else if (rijbewijs.contains("Nee"))
        {
            System.out.println("Kom maar mee naar het bureau");
        }
        else
            {
            System.out.println("Wat is uw leeftijd?");
            int age = s.nextInt();

            if (18 > age)
            {
                System.out.println("U bent nog geen 18 en dat betekend dat u mee moet komen naar het Politie Bureau!");
            }
            else if (18 == age)
            {
                System.out.println("Ik zie dat je 18 bent en dus alleen mag rijden. Fijne Dag nog.");
            }
            else {
                System.out.println("Bedankt voor het laten zien van uw rijbewijs. Fijne dag nog.");
            }
        }
    }
    public void scooter() {
        System.out.println("Heeft u een rijbewijs?");

        String rijbewijs;
        rijbewijs = s.nextLine();

        if (rijbewijs.contains("nee")) {
            System.out.println("Kom maar mee naar het Politie Bureau!");
        }
        else if (rijbewijs.contains("Nee"))
        {
            System.out.println("Kom maar mee naar het Politie Bureau!");
        }
        else
        {
            System.out.println("Wat is uw leeftijd?");
            int age = s.nextInt();

            if (16 > age)
            {
                System.out.println("U bent nog geen 16 en dat betekend dat u mee moet komen naar het Politie Bureau!");
            }
            else if (16 == age)
            {
                System.out.println("Ik zie dat je 16 bent en dus alleen mag rijden. Fijne Dag nog.");
            }
            else {
                System.out.println("Bedankt voor het laten zien van uw rijbewijs. Fijne dag nog.");
            }
        }
    }

    public void fiets() {
        System.out.println("Wat is uw leeftijd?");
        int age = s.nextInt();

        if(4 >= age){System.out.println("Ik breng je naar je verzorgers!");}
        else{System.out.println("Rij voorzichtig!");}

    }

}