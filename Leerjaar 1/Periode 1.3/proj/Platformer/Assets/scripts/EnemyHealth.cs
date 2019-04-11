using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class EnemyHealth : MonoBehaviour
{
    public int enemyHealth;

    // Start is called before the first frame update
    void Start()
    {
        enemyHealth = 5;
    }

    // Update is called once per frame
    void Update()
    {
        checkHealth();
    }

    private void checkHealth()
    {   
        if (enemyHealth <= 0)
        {
            Destroy(gameObject);
        }
    }
}
