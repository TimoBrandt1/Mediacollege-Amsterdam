public class Main {

    public static void main(String[] args)
    {
        functieEen();
        functieTwee(8);
        functieDrie(4, 9);
        System.out.println(lengteLijst());

        int getalleje = 0;
        System.out.println("Dit is de tekst: " + geefTerug(0));
    }

    public static void functieEen()
    {
        System.out.println("Mijn functie werkt ez");
    }

    public static void functieTwee( int getal )
    {
        System.out.println("Het getal = "+ getal);
    }

    public static void functieDrie( int koek, int kaas)
    {
        if(koek <= 5)
        {
            System.out.println("koek");
        }
        if(kaas > 5)
        {
            System.out.println("kaas");
        }
    }

    public static String geefTerug(int waarde)
    {
        if(waarde == 0)
        {
           return "grappig";
        }
        return "Hallo";
    }

    public static int lengteLijst(String[] lijst)
    {
        return lijst.length;
    }
}
