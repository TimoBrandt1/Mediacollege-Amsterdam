public class Waluigi extends Characther
{

    public int points = 0;
    public int lives = 3;

    public Waluigi(){
        speed = 25;
        this.name = "Waluigi";
    }

    public void Jump(){
        System.out.println(name + " is jumping with "+ speed + " height.");
    }

}
