import java.util.ArrayList;

public class Student extends Person {
    private int year;
    private int registrationNumber;
    private ArrayList<String> courses;

    public Student(){
        courses = new ArrayList<String>();
    }

    public void setYear(int year){
        this.year = year;
    }
    public int getYear() {
        return year;
    }

    public void setRegistrationNumber(int registrationNumber) {
        this.registrationNumber = registrationNumber;
    }
    public int getRegistrationNumber() {
        return registrationNumber;
    }
    public void addCourse(String course){
        courses.add(course);
    }
    public ArrayList<String> getCourses(){
        return courses;
    }
}
