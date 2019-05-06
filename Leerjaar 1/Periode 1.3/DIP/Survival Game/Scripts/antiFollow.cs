using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class antiFollow : MonoBehaviour
{
    public GameObject player;

    // Update is called once per frame
    void Update()
    {


    }

    public void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.name == "Player")
        {
            GameObject.Find("Cylinder").GetComponent<cylinderMovement>().PickedUp = true;
            Destroy(gameObject);
        }
    }




}
