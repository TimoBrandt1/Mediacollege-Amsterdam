public class Pancake {

    private int temperature;
    private int weight = 0 ;

    public Pancake(){

    }
    public void setTemperature(int degrees){
        if(degrees <150 && degrees > 0)
        {
            temperature = degrees;
        }
        else
        {
            System.out.println("dat is echt te heet of te koud");
        }

    }
    public int getTemperature(){
        return temperature;
    }
    public void setWeight(int weight){
        if(this.weight == 0)this.weight = weight;
    }
    public int getWeight(){
        return weight;
    }
    public void takeBite(int size){
        if(temperature > 90){
            System.out.println("this pancake is toot hot to eat");
            return;
        }
        if(weight>0){
            weight -= size;
            System.out.println("takes bite");
        }
    }

}
