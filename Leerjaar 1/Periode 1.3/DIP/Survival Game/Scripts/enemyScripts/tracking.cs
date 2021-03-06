﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class tracking : MonoBehaviour
{
    public NavMeshAgent agentP;
    // Start is called before the first frame update
    void Start()
    {
        startPos = transform.position;
    }

    public GameObject player;
    public float speed;
    private Vector3 startPos;

    // Update is called once per frame
    void Update()
    {
        agentP.SetDestination(player.transform.position);
    }
    public void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.name == "Player")
        {
            transform.position = startPos;
            GameObject.Find("Player").GetComponent<health>().amountOfHearts--;
        }
    }
}
