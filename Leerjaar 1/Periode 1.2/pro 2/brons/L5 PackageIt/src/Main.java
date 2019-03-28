import Fruit.Appel;
import Fruit.Banaan;
import Fruit.TropischFruit.Mango;
import Fruit.TropischFruit.Perzik;
import Groentes.Sperziebonen;
import Groentes.Spruitjes;
import Hartig.Jailbreakers;
import Hartig.Kauwgom;
import Zoetigheid.Chocolade;
import Zoetigheid.Pepernoten;

public class Main {

    public static void main(String[] args) {

        Banaan banaan = new Banaan();
        Appel appel = new Appel();
        Mango mango = new Mango();
        Perzik perzik = new Perzik();
        Sperziebonen sperziebonen = new Sperziebonen();
        Spruitjes spruitjes = new Spruitjes();
        Jailbreakers jailbreakers = new Jailbreakers();
        Kauwgom kauwgom = new Kauwgom();
        Chocolade chocolade = new Chocolade();
        Pepernoten pepernoten = new Pepernoten();

        banaan.setKleur("Geel/Zwart");
        appel.setKleur("Rood/Groen");
        mango.setKleur("Geel/Rood");
        perzik.setKleur("Rood/Geel");
        sperziebonen.setKleur("Groen");
        spruitjes.setKleur("Groen");
        jailbreakers.setKleur("Alle Kleuren");
        kauwgom.setKleur("Alle Kleuren");
        chocolade.setKleur("Wit/Bruin/Zwart");
        pepernoten.setKleur("Bruin");

        System.out.println("Banaan kleur: " + banaan.getKleur());
        System.out.println("Appel kleur: " + appel.getKleur());
        System.out.println("Mango kleur: " + mango.getKleur());
        System.out.println("Perzik kleur: " + perzik.getKleur());
        System.out.println("Sperziebonen kleur: " + sperziebonen.getKleur());
        System.out.println("Spruitjes kleur: " + spruitjes.getKleur());
        System.out.println("Jailbreakers kleur: " + jailbreakers.getKleur());
        System.out.println("Kauwgom kleur: " + kauwgom.getKleur());
        System.out.println("Chocolade kleur: " + chocolade.getKleur());
        System.out.println("Pepernoten kleur: " + pepernoten.getKleur());
    }
}
