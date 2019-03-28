import java.util.ArrayList;
import java.util.Date;

public class Person {
    private String name;
    private Date birthdate;
    private int iq;
    private ArrayList<String> diplomas;
    private String country;

    public Person(){
        diplomas = new ArrayList<String>();
    }
    public void setName(String name){
        if(name.length() < 100) {
            this.name = name;
        }else{
            System.out.println("je naam is te lang");
        }
    }
    public String getName() {
        return this.name;
    }
    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }
    public Date getBirthdate() {
        return birthdate;
    }
    public void setIq(int iq) {
        this.iq = iq;
    }
    public int getIq() {
        return iq;
    }
    public void addDiploma(String diploma) {
        diplomas.add(diploma);
    }
    public ArrayList<String> getDiplomas() {
        return diplomas;
    }

    public void setCountry(String country){
        this.country = country;
    }
    public String getCountry(){
        return country;
    }
}
