﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class heartPickup : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.name == "Player")
        { 
            GameObject.Find("Player").GetComponent<health>().amountOfHearts++;
            Destroy(gameObject);
        }
    }
}
