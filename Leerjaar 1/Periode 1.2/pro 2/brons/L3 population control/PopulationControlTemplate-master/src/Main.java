import java.util.Scanner;

import static java.lang.System.in;

public class Main {

    public static void main(String[] args) {

        Person[] persons = {
                new Person()
        };


        Scanner sc = new Scanner(in);
        System.out.println("Type the eye color of person 1.");
        persons[0].setEyecolor(sc.nextLine());

        System.out.println("Type the length of person 1 in cm.");
        persons[0].setLength(sc.nextLine());

        System.out.println("Type the age of person 1.");
        persons[0].setAge(sc.nextLine());

        System.out.println("Type the name of person 1.");
        persons[0].setName(sc.nextLine());

        System.out.println("Type the native country of person 1.");
        persons[0].setNativeCountry(sc.nextLine());

        System.out.println("Type the Bsn of person 1.");
        persons[0].setBsn(sc.nextLine());

        System.out.println("Person 1 Eye color = " + persons[0].getEyecolor());
        System.out.println("Person 1 Length = " + persons[0].getLength());
        System.out.println("Person 1 Age = " + persons[0].getAge());
        System.out.println("Person 1 Name = " + persons[0].getName());
        System.out.println("Person 1 Native Country = " + persons[0].getNativeCountry());
        System.out.println("Person 1 Bsn = " + persons[0].getBsn());

    }

}
