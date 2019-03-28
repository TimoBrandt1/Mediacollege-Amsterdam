

public class B2L4_inheritance {
    public static void main(String[] args){

        Parent parent1 = new Parent();
        OnlineStudent onlineStudent1 = new OnlineStudent();

        parent1.setJob("Tuinman");
        parent1.setName("Henk");
        onlineStudent1.setTypeDevice("Msi Laptop");
        onlineStudent1.setName("Johanes");

        System.out.println("The job of " + parent1.getName() + " is " + parent1.getJob());
        System.out.println("The type of device of " + onlineStudent1.getName() + " is " + onlineStudent1.getTypeDevice());

/*        Person[] people = {
                new Teacher(),
                new Student()

        };
        Teacher t = (Teacher)people[0];
        t.setName("Erwin");
        t.setIq(130);
        t.addDiploma("HBO gamedesign & Development (HKU)");

        Student s = (Student)people[1];
        s.setName("Hendrik");
        s.setIq(130);
        s.addCourse("PRO2");
        s.addDiploma("VMBO T");

        for (Person person : people) {
            System.out.println(person.getName() + " has an IQ of " + person.getIq() + " and has the following diplomas " + person.getDiplomas());

        }
*/
    }
}
