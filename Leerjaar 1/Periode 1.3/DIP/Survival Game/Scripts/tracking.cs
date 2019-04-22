using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class tracking : MonoBehaviour
{
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
        transform.position = Vector3.MoveTowards(transform.position, player.transform.position, speed * Time.deltaTime);
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
