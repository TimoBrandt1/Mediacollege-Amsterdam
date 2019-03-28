package B2L6_Callback;

public class Receiver implements DemoEvent{
    public Receiver(){
        EventNotifier notifier = new EventNotifier(this);


    }
    @Override
    public void demoEvent() {
        System.out.println("Hallo ik wordt nu getriggerd door een andere class (EventNotifier) Deze is klaar met tellen");
    }
}
