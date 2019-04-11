using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyTracking : MonoBehaviour
{
    //Makes a Gameobject for player that can be tracked
    public GameObject player;

    //Creates speed for the enemy
    public float speed = 2;

    //Lose health over time
    public float timeBetweenHealthLoss = 0.8f;
    public float nextHealthLoss = 0.8f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //Tracks the player and moves towards the player
        transform.position = Vector3.MoveTowards(transform.position, player.transform.position, speed * Time.deltaTime);
        
    }

    public void OnCollisionStay2D(Collision2D collision)
    {
        if (collision.gameObject.name == "player")
        {
            Debug.Log("Collision with player");
            if (Time.time > nextHealthLoss)
            {
                nextHealthLoss = Time.time + timeBetweenHealthLoss;
                GameObject.Find("player").GetComponent<health>().amountOfHearts--;
            }
            
        }
    }
}
