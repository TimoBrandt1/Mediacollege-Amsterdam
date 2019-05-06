using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class health : MonoBehaviour
{
    public Texture aTexture;
    public int amountOfHearts = 5;

    void OnGUI()
    {
        if (!aTexture)
        {
            Debug.LogError("No texture selected.");
            return;
        }
        for (int i = 0; i < amountOfHearts; i++)
        {
            GUI.DrawTexture(new Rect(80 * i, 0, 100, 100), aTexture, ScaleMode.ScaleToFit, true, 1.0F);
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
        checkHoleFall();
    }

    private void checkHealth()
    {
        if (amountOfHearts <= 0)
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }
    }
    private void checkHoleFall()
    {
        if (transform.position.y < -10)
        {
            amountOfHearts--;
        }
    }
}
