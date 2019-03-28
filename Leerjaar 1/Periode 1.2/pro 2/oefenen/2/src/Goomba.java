public class Goomba
{
    public int speed = 1;
    public int size = 2;
    public String colour = "default";

    public Goomba()
    {
        if(colour == "red")
        {
            System.out.println("The Goomba is "+ colour);
        }
        if(colour == "blue")
        {
            System.out.println("The Goomba is "+ colour);
        }
    }

    public void Attack()
    {
        System.out.println("Goomba tried to attack you!");

    }
}
