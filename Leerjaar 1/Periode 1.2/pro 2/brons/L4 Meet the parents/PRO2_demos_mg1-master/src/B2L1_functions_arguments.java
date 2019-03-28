public class B2L1_functions_arguments {
    public static void main(String[] args){

        String[] names = {"Erwin", "Kees", "Fred", "Henk", "Richard"};

        for(String name : names) {
            System.out.println(printIets(name));
        }

        /*
        for (int i=0;i<12;i++){
            printIets("Henk");
        }*/
    }
    private static int printIets(String name){
        System.out.println("Hallo ik ben "+name+" en ik ben cool");

        return name.length();
    }


}
