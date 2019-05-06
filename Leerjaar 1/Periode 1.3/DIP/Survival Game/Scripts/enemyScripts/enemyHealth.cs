using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class enemyHealth : MonoBehaviour
{
    public float lifes = 5;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (lifes <= 0)
        {
            GameObject.Find("GeneralScripts").GetComponent<scoreHandeler>().setPoinst();
            Destroy(gameObject);

        }
    }
    private void OnCollisionEnter(Collision collision)
    {
        if(collision.collider.tag == "Bullet")
        {
            lifes--;
            Destroy(collision.collider);
        }
    }
}
