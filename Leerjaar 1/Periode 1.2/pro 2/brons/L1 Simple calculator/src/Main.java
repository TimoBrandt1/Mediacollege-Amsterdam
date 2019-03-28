import java.util.Scanner;

import static java.lang.System.in;

public class Main {

    public static void main(String[] args)
    {
        int num1;
        int num2;
        String som;
        System.out.println("Welkom bij de rekenmaschine!");
        System.out.println("Voer een nummer in om te starten!");

        Scanner sc = new Scanner(in);
        num1 = sc.nextInt();



        System.out.println("Voer uw tweede nummer in");
        num2 = sc.nextInt();

        System.out.println("Voer nu + - / of * in");
        som = sc.next();
        switch(som){
            case "+":
                System.out.println(plus(num1, num2));
                break;
            case "-":
                System.out.println(min(num1, num2));
                break;
            case "*":
                System.out.println(keer(num1, num2));
                break;
            case "/":
                System.out.println(delen(num1, num2));
                break;
            default:
                System.out.println("Wrong Input");
                break;

        }
    }
    public static int plus(int num1, int num2)
    {
       return num1 + num2;
    }
    public static int min(int num1, int num2)
    {
        return num1 - num2;
    }
    public static int keer(int num1, int num2)
    {
        return num1 * num2;
    }
    public static int delen(int num1, int num2)
    {
        return num1 / num2;
    }
}
