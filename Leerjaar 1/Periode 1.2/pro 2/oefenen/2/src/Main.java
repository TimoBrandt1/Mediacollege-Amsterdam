public class Main
{
    public static void main(String[] args)
    {

        Mario mijnMario = new Mario();

        mijnMario.lives = 10;
        mijnMario.speed = 6;

        System.out.println("The Goomba's speed changed to: "+ mijnMario.speed);
        System.out.println("Mario has "+ mijnMario.lives +" lives");
        mijnMario.Jump();

        Goomba mijnGoomba = new Goomba();

        mijnGoomba.speed = 0;
        mijnGoomba.size = 2;

        System.out.println("The Goomba's speed changed to: "+ mijnGoomba.speed);
        System.out.println("The Goomba's size changed to: "+ mijnGoomba.size);

        mijnGoomba.Attack();
    }
}
