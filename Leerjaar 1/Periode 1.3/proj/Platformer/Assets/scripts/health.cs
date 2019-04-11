using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class health : MonoBehaviour
{
    public Texture aTexture;
    public int amountOfHearts = 5;

    //Lose health over time
    public float timeBetweenHealthLoss = 0.8f;
    public float nextHealthLoss = 0.8f;

    void OnGUI()
    {
        if (!aTexture)
        {
            Debug.LogError("No texture selected.");
            return;
        }
        for (int i = 0; i < amountOfHearts; i++)
        {
            GUI.DrawTexture(new Rect(40 * i, 0, 60, 60), aTexture, ScaleMode.ScaleToFit, true, 1.0F);
        }

    }
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        checkHealth();
        if (Time.time > nextHealthLoss && transform.position.y < -10)
        {
            amountOfHearts--;
        }
        
    }

    private void checkHealth()
    {
        if (amountOfHearts <= 0)
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }
    }
}
