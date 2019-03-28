import java.util.Random;

public class Airplane {
    private String myFlightCode;
    private int myPassengers;
    private int myCrashChance;
    public Airplane(int passengers, String flightCode, int crashChance){
        //constructor
        myFlightCode = flightCode;
        myPassengers = passengers;
        myCrashChance = crashChance;

    }
    private boolean alive = true;
    public void fly(){
        if(alive) {
            System.out.println("jeeeeeeeyyhaaaaaaw!!");
        }
    }
    public void crash(){
        System.out.println("aww F&*K!!!");
        System.out.println("flight "+ myFlightCode+" went down. " + myPassengers + " people died!");
        alive = false;

    }
    public boolean checkForDanger(){
        int r = new Random().nextInt(100);
        System.out.println(r);
        if(r < myCrashChance)return true;

        return false;
    }
}
