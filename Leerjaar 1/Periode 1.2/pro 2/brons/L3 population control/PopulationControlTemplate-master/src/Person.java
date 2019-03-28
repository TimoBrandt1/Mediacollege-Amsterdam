import java.util.ArrayList;

public class Person {
    private String eyecolor;
    private String length;
    private String age;
    private String name;
    private String nativeCountry;
    private String bsn;

    private int minLength = 50;
    private int maxLength = 300;

    private int minAge = 0;
    private int maxAge = 100;



    public Person(){

    }

    //Eyecolor
    public void setEyecolor(String eyecolor){

        ArrayList<String> checkEyeColor = new ArrayList<>();
        checkEyeColor.add("blue");
        checkEyeColor.add("green");
        checkEyeColor.add("brown");

        for (String c: checkEyeColor) {
            if(c.equals(eyecolor)){
                this.eyecolor = eyecolor;
                return;
            }
        }
        System.out.println("color not allowed");
        System.exit(1);

        //Array maken
        // For loop maken die de input controleerd
    }
    public String getEyecolor(){
        return this.eyecolor;
    }

    //Length
    public void setLength(String length){

        if(Integer.parseInt(length) < minLength) {
            System.out.println("Te kort!");
            System.exit(1);
            return;
        }

        if(Integer.parseInt(length) > maxLength) {
            System.out.println("Te lang!");
            System.exit(1);
            return;
        }

        this.length = length;
    }
    public String getLength(){
        return this.length;
    }

    //age
    public void setAge(String age){

        if(Integer.parseInt(age) < minAge) {
            System.out.println("Can't be younger than 0!");
            System.exit(1);
            return;
        }

        if(Integer.parseInt(age) > maxAge) {
            System.out.println("To old!");
            System.exit(1);
            return;
        }

        this.age = age;
    }
    public String getAge(){
        return this.age;
    }

    //Name
    public void setName(String name){

        if(name.length() < 2){
            System.out.println("To short name!");
            System.exit(1);
        }

        if(name.length() > 32){
            System.out.println("To long name!");
            System.exit(1);
        }
        this.name = name;
    }
    public String getName(){
        return this.name;
    }

    //Native Country
    public void setNativeCountry(String nativeCountry){
        this.nativeCountry = nativeCountry;
    }
    public String getNativeCountry(){
        return this.nativeCountry;
    }

    //BSN
    public void setBsn(String bsn){
        if(bsn.length() < 8){
            System.out.println("To short bsn!");
            System.exit(1);
        }

        if(bsn.length() > 9){
            System.out.println("To long bsn!");
            System.exit(1);
        }
        this.bsn = bsn;
    }
    public String getBsn(){
        return this.bsn;
    }

}