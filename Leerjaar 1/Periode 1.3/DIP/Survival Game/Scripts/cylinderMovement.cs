using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cylinderMovement : MonoBehaviour
{
    private float speed = 10f;
    public bool PickedUp = false;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (PickedUp == true)
        {
            transform.position -= transform.forward * speed * Time.deltaTime;
        }
    }
}
