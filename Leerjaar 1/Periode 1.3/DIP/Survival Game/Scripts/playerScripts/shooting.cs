using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class shooting : MonoBehaviour
{
    public GameObject bullet;
    private GameObject bulletIns;
    public GameObject spawner;
    public float force = 10;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Mouse0))
        {
            bulletIns = Instantiate(bullet, spawner.transform.position, spawner.transform.rotation);
            bulletIns.GetComponent<Rigidbody>().AddForce(spawner.transform.forward * force);
        }
    }
}
