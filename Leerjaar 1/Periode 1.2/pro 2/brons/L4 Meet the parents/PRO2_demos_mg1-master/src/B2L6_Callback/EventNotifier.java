package B2L6_Callback;



public class EventNotifier {
    private DemoEvent demoEvent;

    public EventNotifier(DemoEvent event){
        demoEvent = event;


        int count = 99999;
        while (count > 0 ){
            count--;
            System.out.println("---- " + count + " ----");
        }
        sendEvent();
    }
    public void sendEvent(){
        demoEvent.demoEvent();
    }
}
