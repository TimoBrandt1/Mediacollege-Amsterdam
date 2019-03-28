public class MarioPlayer
{

    private int _health = 50;
    public int getHealth()
    {
        return _health;
    }
    public void setHealth(int value)
    {
        if(value <= 0)
        {
            value = 0;
        }
        else if(value >= 100)
        {
            value = 100;
        }

        _health = value;
    }

    private String _name = "NO_NAME";
    public String getName()
    {
        return _name;
    }



    public MarioPlayer(String newName)
    {
        _name = newName;
    }

}
